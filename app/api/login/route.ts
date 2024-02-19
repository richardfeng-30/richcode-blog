import { connect } from 'lib/db'
import { hashPassword, verifyPassword } from 'lib/bcrypt'
import { NextResponse } from 'next/server'
import { sign, verify } from 'jsonwebtoken'
import { serialize } from 'cookie'
import { cookies } from 'next/headers'

const MAX_AGE = 60 * 60 * 24 * 30 // days
export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json()
    const { email, password } = body
    if (email && password) {
      const connection = await connect()
      const hashedPassword = await hashPassword(password)

      const querySql = `Select * from users where email = ? and password = ?`
      const [rows] = await connection.execute(querySql, [email, password])
      console.log(rows)
      if (rows?.length > 0) {
        //        const hashedPassword = await hashPassword(password)
        //        console.log(hashedPassword, 'hashpassword')
        //        const passwordDB = rows[0].password
        //        const passwordMatches = await verifyPassword(passwordDB, hashedPassword)
        //console.log(passwordMatches, 'passwordMatches')

        //if (passwordMatches) {
        const secret = 'secret'
        const token = sign(
          {
            email,
          },
          secret,
          {
            expiresIn: MAX_AGE,
          }
        )

        const COOKIE_NAME = 'cookie'
        const seralized = serialize(COOKIE_NAME, token, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: MAX_AGE,
          path: '/',
        })
        return NextResponse.json({ success: true, data: true }, { status: 200 })
        //}
        //return NextResponse.json({ success: false }, { status: 400 })
      } else {
        return NextResponse.json(
          { success: false, error: 'user could not be found' },
          { status: 400 }
        )
      }
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 400 })
  }
}

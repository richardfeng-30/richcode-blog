import { connect } from 'lib/db'
import { hashPassword, verifyPassword } from 'lib/bcrypt'
import { NextResponse } from 'next/server'

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json()
    const { name, email, password } = body
    if (name && email && password) {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      const isValidEmail = emailRegex.test(email)
      if (isValidEmail) {
        const hashedPassword = await hashPassword(password)
        const connection = await connect()
        const querySql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`
        const [rows] = await connection.execute(querySql, [name, email, hashedPassword])
        return NextResponse.json({ success: true }, { status: 200 })
      } else {
        return NextResponse.json(
          { success: false, users: 'user could not be found' },
          { status: 400 }
        )
      }
    }
    return NextResponse.json(
      { success: false, users: 'email and password required' },
      { status: 400 }
    )
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 400 })
  }
}

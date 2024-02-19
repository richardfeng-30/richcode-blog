import { NextResponse } from 'next/server'
import { sign } from "jsonwebtoken";
import { serialize } from 'cookie';
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

const MAX_AGE = 60 * 60 * 24 * 30; // days 
export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json()
    const { username, password } = body
    if (username && password) {
      // we need to connect to mysql
      // and check if they are in the db


      const secret = process.env.JWT_SECRET || "secret";
      const COOKIE_NAME = process.env.COOKIE_NAME || "cookie_name";

      const token = sign(
        {
          username,
        },
        secret,
        {
          expiresIn: MAX_AGE,
        }
      );

      const seralized = serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: MAX_AGE,
        path: "/",
      });

      // now we want to make sure if user is valid
        const cookieStore = cookies();

        const new_token = cookieStore.get(COOKIE_NAME);

        if(!new_token) {
          return NextResponse.json({ success: false, }, { status: 401, headers: { "Set-Cookie": seralized}})
        }

        const { value } = new_token;

        try {
          verify(value, secret);
      
          const response = {
            user: "Super Top Secret User",
          };
      
          return new Response(JSON.stringify(response), {
            status: 200,
          });
        } catch (e) {
          return NextResponse.json(
            {
              message: "Something went wrong",
            },
            {
              status: 400,
            }
          );
        }

      // validate user


      return NextResponse.json({ success: true, }, { status: 200, headers: { "Set-Cookie": seralized}})
    }
    return NextResponse.json({ success: false, new: req })
  } catch (err) {
    return NextResponse.json({ success: false, error: true })
  }
}

// CREATE TABLE `user` (
//      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
//      `userName` varchar(32) DEFAULT NULL,
//      `password` varchar(32) DEFAULT NULL,
//      `name` varchar(32) DEFAULT NULL,
//      `school` varchar(32) DEFAULT NULL,
//      `age` tinyint(100) DEFAULT NULL,
//      PRIMARY KEY (`id`)
//     ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

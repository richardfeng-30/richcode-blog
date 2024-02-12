

import { connect } from "lib/db";
import { hashPassword, verifyPassword } from "lib/bcrypt";
import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    try{
        const body = await req.json();
        const { username, password } = body
        if(username && password){
            const connection = await connect();
            const querySql = `Select * from users where username = ?`;
            const [rows] = await connection.execute(querySql, [username]);
            if(rows?.length > 0) {
                const hashedPassword = await hashPassword(password);
                const passwordMatches = await verifyPassword(password, hashedPassword);

                if(passwordMatches) {
                    return NextResponse.json({success: true}, {status: 200});
                }
                return NextResponse.json({success: false}, {status: 200});
            } else {
                return NextResponse.json({success: false, users: 'user could not be found'}, {status: 400});
            }
        }
        return NextResponse.json({success: false, users: 'username and password required'}, {status: 400});
    } catch (err) {
        return NextResponse.json({success: false, error: err}, {status: 400})
    }
}

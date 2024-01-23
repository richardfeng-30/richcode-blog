

import { NextResponse } from "next/server"

export const POST = async (req: Request, res: Response) => {
    try{
        const body = await req.json();
        const { username, password } = body
        if(username && password){
            // we need to connect to mysql
            // and check if they are in the db
            return NextResponse.json({success: true, new: req})
        }
        return NextResponse.json({success: false, new: req})
    } catch (err) {
        return NextResponse.json({success: false, error: true})
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
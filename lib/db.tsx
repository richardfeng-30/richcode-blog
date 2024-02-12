import mysql from 'mysql2/promise';

export async function connect() {
    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'users'
        });
        return connection;
    } catch(error) {
        console.error("error connecting to db", error)
        throw error;
    }
}
import mysql from "mysql"

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'nilson123',
    database: 'soccer_selection_db'
})

conection.connect()

export default conection
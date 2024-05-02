import mysql from "mysql"

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'nilson123',
    database: 'soccer_selection_db'
})

conection.connect()

/**
 * Execute Sql code whith our without values
 * @param {string} sql sql instruction to be executed 
 * @param {string=id | [values,id] } values values to be passed to sql
 * @param {string} rejectMessage message that will be displayed
 * @returns objetos da promise
 */

export const consult = (sql, values='', rejectMessage) => {
    return new Promise((resolve, reject) => {
        conection.query(sql,values, (error, result) => {
            if (error) return reject(rejectMessage)
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conection
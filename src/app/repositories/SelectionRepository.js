import conection from "../../../database/conection.js"

class SelectionRepository {
    //CRUD
    create(selection) {
        const sql = `INSERT INTO selections SET ?;`
        return new Promise((resolve, reject) => {
            conection.query(sql,selection, (error, result) => {
                if (error) return reject("Not added!")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
     }

    findAll() {
        const sql = "SELECT * FROM selections;"
        return new Promise((resolve, reject) => {
            conection.query(sql, (error, result) => {
                if (error) return reject("Not located!")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }

    findByID(id) {
        const sql = `SELECT * FROM selections WHERE id =?;`
        return new Promise((resolve, reject) => {
            conection.query(sql, id, (error, result) => {
                if (error) return reject("Not located!")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    update(selection, id) {
        const sql = `UPDATE selections SET ? WHERE id =?;`
        return new Promise((resolve, reject) => {
            conection.query(sql, [selection, id], (error, result)=>{
                if (error) return reject("Not located!")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    delete(id) {
        const sql = `DELETE FROM selections WHERE id =?;`
        return new Promise((resolve, reject) => {
            conection.query(sql, id, (error, result) => {
                if (error) return reject("Not deleted!")
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
     }
}

export default new SelectionRepository()
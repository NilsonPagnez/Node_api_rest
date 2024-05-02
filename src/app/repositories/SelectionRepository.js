import { consult } from "../../../database/conection.js"

class SelectionRepository {
    //CRUD
    create(selection) {
        const sql = `INSERT INTO selections SET ?;`
        return consult(sql, selection, 'Unable to add!')
    }

    findAll() {
        const sql = "SELECT * FROM selections;"
        return consult(sql, 'Unable to locate!')
    }

    findByID(id) {
        const sql = `SELECT * FROM selections WHERE id =?;`
        return consult(sql, id, 'Unable to locate!')

    }
    update(selection, id) {
        const sql = `UPDATE selections SET ? WHERE id =?;`
        return consult(sql, [selection, id], 'Unable to update!')

    }
    delete(id) {
        const sql = `DELETE FROM selections WHERE id =?;`
        return consult(sql, id, 'Unable to delete!')

    }
}

export default new SelectionRepository()
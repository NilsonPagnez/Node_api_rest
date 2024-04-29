class SelectionController{
    index(req, res) {
        const sql = "SELECT * FROM selections;"
        conection.query(sql, (error, result)=>{
            if (error){
                console.log(error)
            }else{
                res.status(200).json(result)
            }
        })
    }
    show(req, res) {
        const id = req.params.id
        const sql = `SELECT * FROM selections WHERE id =?;`
        conection.query(sql, id, (error, result)=>{
            const line = result[0]
            if (error){
                console.log(error)
            }else{
                res.status(200).json(line)
            }
        })
    }
    store(req, res) {
        const data = req.body
        const sql = `INSERT INTO selections SET ?;`
        conection.query(sql, data, (error, result)=>{
            if (error){
                console.log(error)
            }else{
                res.status(201).json(result)
            }
        })
    }
    delete(req, res) {
        const id = req.params.id
        const sql = `DELETE FROM selections WHERE id =?;`
        conection.query(sql, id, (error, result)=>{
            if (error){
                console.log(error)
            }else{
                res.status(200).json(result)
            }
        })
    }
    update(req, res){
        const data = req.body
        const id = req.params.id
        const sql = `UPDATE selections SET ? WHERE id =?;`
        conection.query(sql, [data, id], (error, result)=>{
            if (error){
                console.log(error)
            }else{
                res.status(201).json(result)
            }
        })
    }
}

export default new SelectionController()
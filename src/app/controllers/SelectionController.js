import SelectionRepository from "../repositories/SelectionRepository.js"

class SelectionController {
    async index(req, res) {
        const row = await SelectionRepository.findAll()
        res.json(row)
    }
    async show(req, res) {
        const id = req.params.id
        const row = await SelectionRepository.findByID(id)
        res.json(row)
    }
    async store(req, res) {
        const data = req.body
        const row = await SelectionRepository.create(data)
        res.json(row)
    }
    async delete(req, res) {
        const id = req.params.id
        const row = await SelectionRepository.delete(id)
        res.json(row)
    }
    async update(req, res) {
        const data = req.body
        const id = req.params.id
        const row = await SelectionRepository.update(data, id)
        res.json(row)
    }
}

export default new SelectionController()
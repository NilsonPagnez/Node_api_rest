import express from 'express'
import SelectionController from './app/controllers/SelectionController.js'

const app = express()

//indicate express to read body with json
app.use(express.json())

//Routes
app.get('/selections', SelectionController.index)
app.get('/selections/:id', SelectionController.show)
app.post('/selections', SelectionController.store)
app.delete('/selections/:id', SelectionController.delete)
app.put('/selections/:id', SelectionController.update)

export default app

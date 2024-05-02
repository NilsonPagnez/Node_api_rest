import express from 'express'
import routes from './routes.js'

const app = express()

//indicate express to read body with json
app.use(express.json())

//Routes
app.use(routes)

export default app

import express from 'express'
const app = express()

//mock
const selections = [
    {id: 1, selection: 'Brazil', group: 'G'},
    {id: 2, selection: 'Canada', group: 'G'},
    {id: 3, selection: 'Japan', group: 'G'},
    {id: 4, selection: 'china', group: 'G'},

]

// creat default port/root
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/selections',(req, res)=>{
    res.status(200).send(selections)
})

export default app

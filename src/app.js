import express from 'express'
const app = express()

//indicate express to read body with json
app.use(express.json())

//Return the object by thear ID
function selectionById(id){
    return selections.filter(selection => selection.id == id)
}

//Get the object index by their ID
function searchIdSelection(id){
    return selections.findIndex( selection => selection.id == id)
}


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

app.get('/selections/:id',(req, res)=>{
    let index = req.params.id
    res.json(selectionById(index))
    console.log(index)
})


app.post('/selections',(req, res) =>{
    selections.push(req.body)
    res.status(201).send('Selection sucessfully registered ')
})

app.delete('/selections/:id', (req, res) =>{
    let index = searchIdSelection(req.params.id)
    selections.splice(index, 1)
    res.send('Selection excluded!')
})

app.put('/selections/:id', (req, res) =>{
    let index = searchIdSelection(req.params.id)
    selections[index].selection = req.body.selection
    selections[index].group = req.body.group
    res.send(selections[index])
})


export default app

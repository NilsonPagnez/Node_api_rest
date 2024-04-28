import app from './src/app.js'
const PORT = 3000

// listen to the default PORT/root
app.listen(PORT,() =>{
    console.log(`Server runing on http://localhost:${PORT}`)
})
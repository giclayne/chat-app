const express = require('express')
const app = express()
const PORT = 4000;

const http = require('http').Server(app)
const cors = require('cors')

app.use(cors())

app.get('/api', (req,res)=>{
    res.json({
        message: 'Hello World',
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
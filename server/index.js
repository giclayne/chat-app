const express = require('express')
const app = express()
const PORT = 4000;

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http,{
    cors:{
        origin:'http://localhost:3000'
    }
});

app.use(cors())

socketIO.on('connection', (socket)=>{
    console.log(`${socket.id} a user connected`);
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} a user disconnected`);
    })
});

app.get('/api', (req,res)=>{
    res.json({
        message: 'Hello World',
    })
})

http.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
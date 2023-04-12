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

let users = [];
socketIO.on('connection', (socket)=>{
    console.log(`${socket.id} a user connected`);
    socket.on('message', (data) => {
        socketIO.emit('messageResponse', data);
    });
    socket.on('newUser', (data) => {
    users.push(data);
    socketIO.emit('newUserResponse', users);
  });

    socket.on('disconnect', ()=>{
        console.log(`${socket.id} a user disconnected`);
        users = users.filter((user) => user.socketID !== socket.id);
        socketIO.emit('newUserResponse', users);
        socket.disconnect();
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
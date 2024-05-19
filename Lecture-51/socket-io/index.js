const exp = require('constants');
const express = require('express');
const app = express();
// making http server
const http = require('http');
const server = http.createServer(app);
const path = require('path');
// socket configurations
const socketio = require('socket.io');
const io = socketio(server) //mnouting the server inside socketio

let users = {};

// console.log(io,'io')

io.on('connection' , (socket)=>{
    console.log("Connection established")
    // receiving event
    socket.on('send-msg' , (data)=>{
        // console.log(data)
        io.emit('received-msg' , {
            msg: data.msg,
            // id: socket.id
            username: users[socket.id]
        })

    })
    socket.on('login' , (data)=>{
        users[socket.id] = data.username;
    })
})


// setting up public on a path '/'
app.use('/' , express.static(path.join(__dirname , 'public')))






const PORT = 8080;
server.listen(PORT , ()=>{
    console.log(`server connected at PORT : ${[PORT]}`)
})
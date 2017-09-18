const PORT = process.env.PORT || 3100;

const path = require('path');
const http = require('http');

const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const { generateMessage } = require('./utils/message');

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('this is from server');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })

});

server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
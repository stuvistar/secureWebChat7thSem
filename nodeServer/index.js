// Node server which will handle socket io connection
const io = require('socket.io')(8000)

const users = {}

// socket.on means, yeh event milta hai toh is callback ko run kar
// New user enter Event, It alerts all other users 
io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        users[socket.id] = name;
        socket.broadcast.emit('user-joined',name);
    });

// When someone send the message
socket.on('send',message =>{
    socket.broadcast.emit('recieve', {message : message, name: user{socket.id}})
});


})
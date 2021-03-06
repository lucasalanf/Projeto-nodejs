const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://lucasalanf:mg88g09jhL@ds121415.mlab.com:21415/goweek-lucas', {
    useNewUrlParser: true
});

app.use((req, res, next)=>{
    req.io = io;

    return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, ()=>{
    console.log(":) server starter na porta 3000");
})
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

setInterval(() => {
  io.emit('image', 'somedata');
}, 1000);

server.listen(5000, () => {
  console.log('App listening on port 5000!');
});

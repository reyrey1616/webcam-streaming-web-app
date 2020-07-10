const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cv = require('opencv4nodejs');

const wCap = new cv.VideoCapture(0);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

setInterval(() => {
  const frame = wCap.read();
  const image = cv.imencode('.jpg', frame).toString('base64');

  io.emit('image', image);
}, 10000);

server.listen(5000, () => {
  console.log('App listening on port 5000!');
});

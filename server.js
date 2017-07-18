const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();
const privateKey  = fs.readFileSync('./path/private.pem', 'utf8');
const certificate = fs.readFileSync('./path/file.crt', 'utf8');


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/static', express.static(__dirname + '/three.js'));
app.use('/data', express.static(__dirname + '/data'));

http.createServer(app).listen(3000, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', 3000);
});

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(3001, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', 3001);
});

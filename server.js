const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/main.js'));
});

app.listen(8080);

console.log('Server started at ' + Date());
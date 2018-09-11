var express = require('express')
 , http = require('http')
 , app = express()
 , server = http.createServer(app);
 
app.get('/', function (req, res) {
    res.send('Hello world\n');
});

app.get('/world.html', function (req, res) {
    res.send('Hello world\n');
});

app.get('/hello', (req, res) => {
    res.send('complete\n');
});

app.post('/post', (req, res) => {
    req.on('data', (data) => {
	data = JSON.parse(data);
	res.json(data);
	res.end();
    }) 
});

app.get('/error', (req, res) => {
	res.end();
});

app.post('/bug', (req, res) => {
    req.on('data', (data) => {
	res.json(data);
	res.end();
    }) 
});

var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.configure(function() {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
});

io.sockets.on('connection', function(socket) {
    socket.emit('news', {
        hello: 'world'
    });
    socket.on('my other event', function(data) {
        console.log(data);
    });
});

server.listen(process.env.PORT,process.env.IP);

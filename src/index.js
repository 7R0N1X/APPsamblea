const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const bodyParser = require('body-parser');
require('./database');
require('./sockets')(io);

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/", require("./routes/user-routes"));

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'dashboard.html'));
})

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

// SERVER STARTS
server.listen(4000, () => {
    console.log('====================================');
    console.log('Server on port', app.get('port'));
    console.log('====================================');
});
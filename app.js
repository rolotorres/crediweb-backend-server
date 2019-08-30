require('./config/config');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');


// Inicializamos las variables
const app = express();
let server = http.createServer(app);


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


// Body parser: application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Importamos las rutas
const appRoutes = require('./server/routes/app');
const rolRoutes = require('./server/routes/roles');
const fajaRoutes = require('./server/routes/fajas');
const fileRoutes = require('./server/routes/files');
const clitype = require('./server/routes/clienTypes');
const dptoRoutes = require('./server/routes/deparments');
const comtypeRoutes = require('./server/routes/companiesTypes');


// Rutas
app.use('/comptype', comtypeRoutes);
app.use('/department', dptoRoutes);
app.use('/clitype', clitype);
app.use('/file', fileRoutes);
app.use('/faja', fajaRoutes);
app.use('/rol', rolRoutes);
app.use('/', appRoutes);


// Inicializamos el Socket.IO
let io = socketIO(server);

io.on('connect', function() {
    console.log('Usuario conectado');
})


// Escuchar peticiones
server.listen(process.env.PORT, () => {;
    console.log(`Express server puerto 3000: \x1b[32m%s\x1b[0m`, `online`);
});
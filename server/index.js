const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database.js');

// Settings
app.set('port', 3002); // establece el puerto que ofrece el servidor o si no encuentra, 3000

// Middlewares
app.use(morgan('dev')); // me hace un log cuando hacen peticiones al servidor desde el navegador
app.use(express.json()); // la utilizamos para recibir y enviar json en comunicación del back - front
app.use(cors('*'));

// Routes
app.use('/api/user', require('./routes/user.routes'));
// hola
/*
app.use('/api/pub', require('./routes/pub.routes'));

app.use('/api/msg', require('./routes/msg.routes'));
app.use('/api/location', require('./routes/location.routes'));
*/

app.listen(app.get('port'), () => {
    console.log('Servidor OK en puerto: ' + app.get('port'));
});


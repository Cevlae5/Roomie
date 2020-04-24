const mongoose = require('mongoose');
const dbName = 'room';
const con = 'mongodb://localhost/mongod'+dbName;
mongoose.connect(con, {useNewUrlParser: true})
.then(db => console.log('Conectado a MongoDB'))
.catch(err => console.log('Error de conexión con MongoDB'));

module.exports = mongoose;
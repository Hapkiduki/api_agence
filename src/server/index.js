// Requires
const express = require('express');
const path = require('path');
const MySQL = require('./mysql/mysql');

// Inicializar variables
const app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// crear instancia de la base de datos probar singleton
//MySQL.instance

MySQL.ejecutarQuery(`
SELECT * FROM cao_status_os
`, (err, usuario) => {
    if (err) {
        console.error('Error en consulta!');
        console.log(err);
    }
    console.log(usuario);

});

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
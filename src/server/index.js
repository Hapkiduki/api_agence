// Requires
const express = require('express');
const path = require('path');
const config = require('./config/config');
const User = require('./mysql/test');

// Inicializar variables
const app = express();

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

User.findAll({ attributes: ['tipo_usuario'] })
    .then(user => {
        console.log(JSON.stringify(user))
    })
    .catch(err => {
        console.log(err)
    })


/*MySQL.ejecutarQuery(`
SELECT * FROM cao_status_os
`, (err, usuario) => {
    if (err) {
        console.error('Error en consulta!');
        console.log(err);
    }
    console.log(usuario);

});*/

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto: ', process.env.PORT);
});
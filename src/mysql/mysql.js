// Requires
const mysql = require("mysql");

class MySQL {


    constructor() {

        console.log('Se instancia la clase MySQL');
        this.cnn = mysql.createConnection({
            host: 'db4free.net',
            user: 'roboti',
            password: 'roboti123.',
            database: 'caotica'
        });

        this.conectarDB();
    }

    // Patron Singleton para evitar multiples instancias
    static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query, callback) {

        this.instance.cnn.query(query, (err, results, fields) => {
            if (err) {
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('El registro solicitado no existe!');
            } else {
                callback(null, results);
            }
        });
    }

    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log('Base de datos Online!');
        });
    }
}
module.exports = MySQL;
const MySQL2 = require('./mysql2');
const Sequelize = require('sequelize');

const User = MySQL2.instance.cnn.define('user', {
    tipo_usuario: { type: Sequelize.STRING, field: 'ds_tipo_usuario' },
}, {
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    tableName: 'tipo_usuario',
    sequelize: MySQL2.instance
});

module.exports = User;
const express = require('express');
const Sequelize = require('sequelize');

// Models
const { PermissaoSistema, Usuario } = require('../models/relationships');

const app = express();
const Op = Sequelize.Op;

// Obtiene la lista de consultores
app.get('/consultores', (req, res) => {

    Usuario.findAll({
            //attributes: ['co_usuario', 'no_usuario'],
            include: [{
                model: PermissaoSistema,
                as: 'permissao_sistema',
                where: {
                    co_sistema: '1',
                    in_ativo: 's',
                    co_tipo_usuario: {
                        [Op.in]: ['0', '1', '2']
                    }
                }
            }, ],
        })
        .then(usuario => {
            res.json({
                ok: true,
                usuario
            });
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                ok: false,
                err
            });
        })

});

module.exports = app;
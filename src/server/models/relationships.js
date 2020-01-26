const PermissaoSistema = require('./permissao_sistema');
const Usuario = require('./usuario');

PermissaoSistema.hasMany(Usuario, { foreignKey: 'co_usuario' })
Usuario.belongsTo(PermissaoSistema, { foreignKey: { name: 'co_usuario' } });

module.exports = { PermissaoSistema, Usuario };
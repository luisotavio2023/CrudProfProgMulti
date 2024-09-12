const sequelize = require('../config/database');

// Importar os modelos
const Professores = require('./Professores');
const Livros = require('./Livros');
const Compras = require('./Compras');

// Inicializar os modelos
const models = {
  Professores: Professores(sequelize, sequelize.Sequelize.DataTypes),
  Livros: Livros(sequelize, sequelize.Sequelize.DataTypes),
  Compras: Compras(sequelize, sequelize.Sequelize.DataTypes),
};

// Configurar as associações
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models };

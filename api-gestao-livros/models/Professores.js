// models/Usuarios.js
module.exports = (sequelize, DataTypes) => {
    const Professores = sequelize.define('Professores', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nivel: {
        type: DataTypes.ENUM('Administrador', 'Funcionario'),
        defaultValue: 'Fuwncionario',
      },
    });
  
    return Usuarios;
  };
  
const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User',{
  nome:{
    type: DataTypes.STRING,
    allowNull: false
  },
  matricula:{
    type: DataTypes.STRING,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone:{
    type: DataTypes.NUMBER,
    allowNull: false
  },
  senha:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = User

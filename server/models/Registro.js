const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Registro = db.define('Registro',{
  tipo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  data:{
    type: DataTypes.DATEONLY,
    allowNull:false
  },
  hora:{
    type: DataTypes.TIME,
    allowNull:false
  }
})

module.exports = Registro

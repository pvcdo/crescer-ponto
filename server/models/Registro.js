const mongoose = require('../db/conn')
const { Schema } = mongoose

const Registro = mongoose.model(
  'Registro', 
  new Schema({
    tipo: {
      type: String,
      required: true
    }
  },{timestamps:true})
)

module.exports = Registro
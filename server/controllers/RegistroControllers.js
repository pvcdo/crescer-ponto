const Registro = require('../models/Registro')

module.exports = class RegistroController{
  
  static async pegarRegistros(req,res){
    res.json("Retornando os registros de ponto")
  }

  static async registrar(req,res){
    res.json("Estamos resgistrando um ponto")
  }

}

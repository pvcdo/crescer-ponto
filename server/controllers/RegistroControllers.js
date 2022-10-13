const Registro = require('../models/Registro')
const {Op} = require('sequelize')

module.exports = class RegistroController{
  
  static async pegarRegistros(req,res){
    res.json("Retornando os registros de ponto")
  }

  static async registrar(req,res){
    const hora_completa = new Date()

    const dia = hora_completa.getDate()
    const mes = hora_completa.getMonth() + 1
    const ano = hora_completa.getFullYear()

    const data = `${dia}/${mes}/${ano}`
    
    const qts_hora = hora_completa.getHours()
    const minutos = hora_completa.getMinutes()
    const segundos = hora_completa.getSeconds()

    const hora = `${qts_hora}:${minutos}:${segundos}`
    
    Registro.findAll({
      where:{data}
    }).then((registros_dia)=>{
      const n_registros = registros_dia.length
      let tipo
      switch(n_registros){
        case 0:
          tipo = "entrada"
          break;
        case 1:
          tipo = "saida_almoco"
          break;
        case 2:
          tipo = "volta_almoco"
          break;
        case 3:
          tipo = "saida"
          break;
        default:
          return res.status(422).json({
            msg:"Todos os registros do dia já foram feitos!"
          }) 
      }
      Registro.create({tipo,data,hora})
      res.json("Registramos a " + tipo)
    }).catch(e => {
      return res.status(422).json({
        msg:"Temos um erro desconhecido!"
      })
    })
    
  }

}

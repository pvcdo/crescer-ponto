const Registro = require('../models/Registro')
const {Op} = require('sequelize')

module.exports = class RegistroController{
  
  static async pegarRegistros(req,res){
    res.json("Retornando os registros de ponto")
  }

  static async registrar(req,res){

    console.log("Começamos a registrar")

    /*res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");*/

    const hora_completa = new Date()

    console.log(hora_completa)

    const dia = hora_completa.getDate()
    const mes = hora_completa.getMonth()
    const ano = hora_completa.getFullYear()

    let data = `${ano}-${mes}-${dia}`
    let data1 = `${ano}-${mes+1}-${dia}`

    console.log("data antiga: " + data)
    
    const qts_hora = hora_completa.getHours()
    const minutos = hora_completa.getMinutes()
    const segundos = hora_completa.getSeconds()

    const hora = `${qts_hora}:${minutos}:${segundos}`

    console.log("hora antiga " + hora)
    
    Registro.findAll({
      where:{data:data1}
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
          return res.json({
            msg:"Todos os registros do dia já foram feitos!"
          }) 
      }

      data = new Date(ano,mes,dia)

      console.log("nova data: " + data)

      Registro.create({tipo,data,hora})
      return res.json({
        msg: "Registramos a " + tipo
      })
    }).catch(e => {
      return res.status(422).json({
        msg:"Temos um erro desconhecido!" + e.toString()
      })
    })

    /*res.send("Função de registro executada!")*/
    
  }

}

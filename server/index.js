const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const app = express()

app.use(express.json())

app.use(cors(
  //{origin:"http://localhost:3000"}
))

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});*/

app.use('/registro',require('./routes/RegistroRoutes'))

app.get('/',(req,res) => {
  res.send("Estamos no back-end do app de pontos")
})

// conn.sync({force:true}) // resetando o banco
 conn.sync() // mantendo os dados do banco
  .then(() => {
    app.listen(5000,()=>{
      console.log("Estamos rodando o back-end na porta 5000")
    })
  })
  .catch(e => console.error('Erroooooo: ' + e))

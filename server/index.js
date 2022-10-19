const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')

const app = express()

app.use(express.json())
app.use(cors({
  credentials: false, 
  origin: 'http://localhost:3000'
}))
app.use(express.static('public'))

app.get('/',(req,res) => {
  res.send("Estamos no back-end do app de pontos")
})

app.use('/registro',require('./routes/RegistroRoutes'))

// conn.sync({force:true}) // resetando o banco
conn.sync() // mantendo os dados do banco
  .then(() => {
    app.listen(5000,()=>{
      console.log("Estamos rodando o back-end na porta 5000")
    })
  })
  .catch(e => console.error('Erroooooo: ' + e))

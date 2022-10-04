const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.send("Estamos no back-end do app de pontos")
})

app.listen(5000,()=>{
  console.log("Estamos no back-end rodando na porta 5000")
})
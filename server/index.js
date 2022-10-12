const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
  credentials: true, 
  origin: 'http://localhost:3000'
}))
app.use(express.static('public'))

app.get('/',(req,res) => {
  res.send("Estamos no back-end do app de pontos")
})

app.use('/registro',require('./routes/RegistroRoutes'))

app.listen(5000,()=>{
  console.log("Estamos no back-end do app de pontos")
})
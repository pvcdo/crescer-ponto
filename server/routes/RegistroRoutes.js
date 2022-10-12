const express = require('express')
const router = express.Router()
const RegistroController = require("../controllers/RegistroControllers")

router.get('/pegarRegistros',RegistroController.pegarRegistros)

router.post('/registrar',RegistroController.registrar)

module.exports = router
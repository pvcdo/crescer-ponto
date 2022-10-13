const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  'crescer-ponto',
  'root',
  'Mysql#1',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

try{
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
}catch(e){
  console.error('Não conseguimos conectar ao Sequelize... Erro: ' + e)
}

module.exports = sequelize
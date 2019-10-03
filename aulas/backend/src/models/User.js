const mongoose = require('mongoose'); //importando mongoose

const UserSchema = new mongoose.Schema({
    email: String
}) //Criando schema (campos que serao utilizados)

module.exports = mongoose.model('User',UserSchema); //primeiro parametro é o nome do schema, segundo parametro é o schema


// quais campos vamos gravar no banco de dados (Model)
// regras de negócio da nossa aplicacao (controller)
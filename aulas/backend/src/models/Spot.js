const mongoose = require('mongoose'); //importando mongoose

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User' //referencia para o model User
    } 
}) //Criando schema (campos que serao utilizados)

module.exports = mongoose.model('Spot',SpotSchema); //primeiro parametro é o nome do schema, segundo parametro é o schema


// quais campos vamos gravar no banco de dados (Model)
// regras de negócio da nossa aplicacao (controller)
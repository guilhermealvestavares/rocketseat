const express = require('express'); //importar dependencia externa
const routes = require ('./routes'); //puxando rotas de arquivo routes.js

const app = express(); 
app.use(express.json()); // passar json pelo body
app.use(routes); //equivalente a ter aquelas rotas aqui. importando as rotas do arquivo rotas.js


app.listen(3333); //porta que ouvirá tudo isso

// app.post('/users',(req,res) =>{} primeiro parametro do get é a rota, o segundo é uma funcao. req pega parametro enviado na requisicao

//metodos importantes de uma API: get (ler), post (criar), put(editar), delete (deletar)

//route params vai dentro da url 'url/users/1'
// req.query - acessar o query param (para filtros)
// req.params - Acessar Route params (para edicao e delete)
// req.body - acessar corpo da requisicao (criacao e edicao de registros)

const express = require('express'); //importar dependencia externa
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions',SessionController.store);
   

module.exports = routes; //exportando rotas para o arquivo server.js
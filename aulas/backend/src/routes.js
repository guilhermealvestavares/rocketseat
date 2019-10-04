const express = require('express'); //importar dependencia externa
const multer = require('multer'); //importar dependencia externa

const uploadConfig = require('./config/upload'); //importar dependencia externa
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store); //rota de sessoes
routes.post('/spots',upload.single('thumbnail'),SpotController.store); //rota de spots. o segundo parametro é o nome do campo lá na api que recebera a imagem
   
module.exports = routes; //exportando rotas para o arquivo server.js
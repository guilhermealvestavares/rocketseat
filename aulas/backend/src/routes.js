const express = require('express'); //importar dependencia externa

const routes = express.Router();

routes.post('/users',(req,res) =>{ 
    return res.json(req.body); 
});

module.exports = routes; //exportando rotas para o arquivo server.js
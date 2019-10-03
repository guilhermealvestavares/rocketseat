//controller: index, show, store, update, destroy
//index: listagem de sessoes
//show: listar uma unica sessao
//store: criar sessao
//update: atualizar sessao
//destroy: excluir sessao
const User = require('../models/User')
module.exports = {
  async store(req,res){
    const { email } = req.body; //capturar email que vira pelo corpo

    let user = await User.findOne({email}); //findone busca apenas um email

    if(!user){ // só cria se email nao tiver cadastrado
      user = await User.create({email});
    }
    
    return res.json(user); //retorna o json do usuario criado com as informacoes  
  }
};
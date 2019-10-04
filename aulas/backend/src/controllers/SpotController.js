
module.exports = {
  async store(req,res){
    console.log(req.body);
    console.log(req.file);

    return res.json({ ok:true})
  }
};

//json nao aceita imagem como formato enviado. Ao inves de json, vamos enviar por Multpartform
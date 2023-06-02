const servicesUsuario = require("../services/servicesUsuario");

const listar = async(req,res)=>{
    const listado = await servicesUsuario.listar();
    res.send(listado);
};

const crear = async(req,res/*,next*/)=>{
    const dataUsuario = req.body;
    //console.log(dataUsuario)
    const usuarioCreado = await servicesUsuario.crear(dataUsuario);
    res.send(usuarioCreado);
};

const buscarUno = async(req,res)=>{
    const mail = req.body.mail;
    const usuario = await servicesUsuario.buscarUno(mail);
    res.send(usuario);
};


module.exports = {
    listar,
    crear,
    buscarUno
};
const db = require("../../database/models");

const listar = async()=>{
  return await db.Usuarios.findAll();
};

const crear = async (dataUsuario) => { 
    return await db.Usuarios.create(dataUsuario);
  };

const buscarUno = async(mail) =>{
  return await db.Usuarios.findOne({where:{mail:mail}});
};

module.exports = {
    crear,
    listar,
    buscarUno
};
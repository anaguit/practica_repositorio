const repositoriesUsuario = require("../repositories/repositoriesUsuario");

const listar = async()=>{
    return await repositoriesUsuario.listar();
};

const crear = async (dataUsuario)=>{
    return await repositoriesUsuario.crear(dataUsuario);
};

const buscarUno = async(data)=>{
    return await repositoriesUsuario.buscarUno(data);
};

module.exports = {
    crear,
    listar,
    buscarUno
};
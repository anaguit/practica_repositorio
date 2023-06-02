function modeloUsuarios(sequelize,Datatypes){
    const alias = "Usuarios";

    const cols = {
        id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        nombre:{
            type:Datatypes.STRING(50),
            allowNull:false
        },
        mail:{
            type:Datatypes.STRING(50),
            allowNull:false
        },
        contrasenia:{
            type:Datatypes.STRING(50),
            allowNull:false
        }
    };

    const config = {
        tableName:"usuarios",
        timestamps:false
    };

    const Usuarios = sequelize.define(alias,cols,config);

    Usuarios.associate = (modelos)=>{
        Usuarios.hasMany(modelos.Casas,{
            as:"usuarioCasa",
            foreignKey:"id_usuarios"
        })
    }

    return Usuarios;
}

module.exports = modeloUsuarios;
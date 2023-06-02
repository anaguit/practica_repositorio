function modeloCasas(sequelize,Datatypes){
    const alias = "Casas";

    const cols = {
        id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        direccion:{
            type:Datatypes.STRING(50),
            allowNull:false
        },
        id_usuarios:{
            type:Datatypes.INTEGER,
            allowNull:false
        }
    };

    const config = {
        tableName:"casas",
        timestamps:false
    };

    const Casas = sequelize.define(alias,cols,config);

    Casas.associate = (modelos)=>{
        Casas.belongsTo(modelos.Usuarios,{
            as:"casaUsuario",
            foreignKey:"id_usuarios"
        });
    };

    return Casas;
};

module.exports = modeloCasas;
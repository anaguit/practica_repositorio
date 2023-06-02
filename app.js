const express = require("express");
const app = express();
const methodOverride = require("method-override");
const routerUsuario = require("./src/routes/routerUsuario");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride("_mehod"));

app.use("/usuario",routerUsuario);

app.listen(process.env.PORT || 3000,()=>{console.log("servidor corriendo")});
const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controllers/controllerUsuario");

router.get("/",controllerUsuario.listar);
router.post("/",controllerUsuario.crear);
router.post("/uno",controllerUsuario.buscarUno);

module.exports = router;
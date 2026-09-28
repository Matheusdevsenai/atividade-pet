const express = require("express");
const ServicoController = require("../controllers/ServicoController");

const router = express.Router();

const controller = new ServicoController();

router.get("/", (req, res) => {
    controller.listar(req, res);
});

router.post("/", (req, res) => {
    controller.cadastrar(req, res);
});

router.delete("/:id", (req, res) => {
    controller.excluir(req, res);
});

module.exports = router;
// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUÁRIO
const livroControllers = require("../controllers/livroControllers.js")

// ROTAS DO USUÁRIOS
// LOGIN
router.get("/login", livroControllers.login)

// CRUD
// MOSTRA A PÁGINA DE CRIAR USUÁRIO
router.get("/cadastrar", (req,res) => {
    res.render("livro/cadastrar");
})

// MANDAR AS INFORMAÇÕES DE CADASRO PARA O CONTROLLER 
router.post("/cadastrar", livroControllers.criar)

// MOSTRA A PÁGINA DE EDITAR USUÁRIO
router.get("/editar", (req,res) => {
    res.render("livro/editar");
})

// MOSTRA A PÁGINA DE LISTAR USUÁRIOS
router.get("/listar", (req,res) => {
    res.render("livro/listar");
})

router.get("/", (req, res) =>{
    res.send("MOSTRANDO A LISTA DE USUÁRIOS");
})

// EXPORTAR O ROUTER
module.exports = router
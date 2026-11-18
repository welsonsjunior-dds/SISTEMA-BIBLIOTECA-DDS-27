// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js")

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
    // LOGIN    
    login : (req,res) => {
        // EXECUTAR A FUNÇÃO NO MODEL
        usuarioModels.login()

        // DIZ A RESPOSTA
        res.send("VOU CHAMAR O MODEL PRA LOGAR")
    },
    // CRUD
    // CREATE
    criar: (req, res) =>{
        usuarioModels.criarUsuario()
        res.send("CRIE UM USUÁRIO")
    },
    // READ
    listar: (req,res) => {
        usuarioModels.listarUsuarios()
        res.send("MOSTREI A LISTA DE USUÁRIOS")   
    },
    // UPDATE
    atualizar: (req, res) =>{
        usuarioModels.atualizarUsuario()
        res.send("ATUALIZEI UM USUÁRIO")          
    },
    // DELETE
    deletar: (req, res) => {
        usuarioModels.deletarUsuario()
        res.send("DELETEI UM USUÁRIO")          
    }
}
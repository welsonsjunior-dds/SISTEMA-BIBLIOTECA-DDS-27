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
    criar: async (req, res) =>{
        try{
            // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
            const { nome, email, senha, perfil} = req.body

            // PASSA AS INFORMAÇÕES PRO MODEL 
            await usuarioModels.criarUsuario( nome, email, senha, perfil)

            // REDIRECIONA A PAGINA DE LISTAR DE USUÁRIO
            res.redirect("/usuarios")
        }   
        catch(erro){
            // MOSTRA O ERRO NO TERMINAL
            console.log(erro);
            //  RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
            res.render('erro', {erro, mensagem: "Erro ao criar o usuário"})
            
        }
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
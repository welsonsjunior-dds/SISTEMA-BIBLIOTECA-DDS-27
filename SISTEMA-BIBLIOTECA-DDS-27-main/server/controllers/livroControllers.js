// IMPORTAÇÃO DO MODEL
import livroModels from ("../models/livroModels.js")

// EXPORTAR AS FUNÇÕES DO CONTROLLER
export function login(req, res) {
    // EXECUTAR A FUNÇÃO NO MODEL
    usuarioModels.login()

    // DIZ A RESPOSTA
    res.send("VOU CHAMAR O MODEL PRA LOGAR")
}
export async function criar(req, res) {
    try {
        // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO
        const { titulo, autor, ano_lancamento, visibilidade, genero } = req.body

        // PASSA AS INFORMAÇÕES PRO MODEL 
        await livroModels.criarLivro(titulo, autor, ano_lancamento, visibilidade, genero)

        // REDIRECIONA A PAGINA DE LISTAR DE USUÁRIO
        res.redirect("/Livro")
    }
    catch (erro) {
        // MOSTRA O ERRO NO TERMINAL
        console.log(erro)
        //  RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
        res.render('erro', { erro, mensagem: "Erro ao criar o Livro" })

    }
}
export function listar(req, res) {
    livroModels.listarLivro()
    res.send("MOSTREI A LISTA DE LIVRO")
}
export function atualizar(req, res) {
    livroModels.atualizarLivro()
    res.send("ATUALIZEI UM Livro")
}
export function deletar(req, res) {
    livroModels.deletarLivro()
    res.send("DELETEI UM LIVRO")
}
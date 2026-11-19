// IMPORTANDO AS CONFIGURAÇÕES DO BANCO 
const db = require("../config/db.js")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN    
    login : () => {
        console.log("LOGIN USUÁRIO FUNCIONANDO");
    },
    // CRUD
    // CREATE
    criarLivro: async (titulo, autor, ano_lancamento, visibilidade, genero) =>{
        // VARIAVEL PRA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_livros (titulo, autor, ano_lancamento, visibilidade, genero )
                      VALUES (?, ?, ?, ?, ?)`
        // EXECUTA O SQL
        const [resutado] = await db.execute(sql, [titulo, autor, ano_lancamento, visibilidade, genero])

        // RETORNO PRO CONTROLLER O RESULTADO
        return resutado.insertId


    },
    // READ
    listarLivro: () => {
        console.log("TOMA AI OS LIVROS");
    },
    // UPDATE
    atualizarLivro: () =>{
        console.log("ATUALIZEI UM LIVRO");
    },
    // DELETE
    deletarLivro: () => {
        console.log("APAGUEI UM LIVRO");
    }
}
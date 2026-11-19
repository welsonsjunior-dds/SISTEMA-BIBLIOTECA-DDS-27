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
    criarUsuario: async (nome, email, senha, perfil) =>{
        // VARIAVEL PRA GUARDAR O COMANDO SQL
        const sql = ` INSERT INTO tb_usuarios (nome, email, senha, perfil)
                      VALUES (?, ?, ?, ?)`
        // EXECUTA O SQL
        const [resutado] = await db.execute(sql, [nome, email, senha, perfil])

        // RETORNO PRO CONTROLLER O RESULTADO
        return resutado.insertId


    },
    // READ
    listarUsuarios: () => {
        console.log("TOMA AI OS USUÁRIOS");
    },
    // UPDATE
    atualizarUsuario: () =>{
        console.log("ATUALIZEI UM USUÁRIO");
    },
    // DELETE
    deletarUsuario: () => {
        console.log("APAGUEI UM USUÁRIO");
    }
}
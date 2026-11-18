// IMPORTANDO O MÓDULO DO MYSQL PARA CONECTAR AO BANCO
const mysql = require("mysql2/promise")

// Cria uma pool de conexão, para evitar erros no banco por superlotação 
const pool = mysql.createPool(
    {
        host: process.env.DB_HOST, // ONDE O BANCO ESTÁ HOSPEDADO,
        user: process.env.DB_USER, // USUÁRIO QUE FARÁ A CONEXÃO,
        password: process.env.DB_PASSWORD, // SENHA DO USUÁRIO,
        database: process.env.DB_NAME, // BANCO AO QUAL SE DESEJA CONECTAR, 
        // SE TODOS ESTIVERAM OCUPADOS, DEIXA UM ESPERANDO, SEM DAR ERRO
        waitForConnections: true,
        // QUANTIDADE MÁXIMA DE CONEXÕES AO MESMO TEMPO
        connectionLimit: 10,
        // MÁXIMO DE LISTA DE ESPERA
        queueLimit: 0 // 0 = ILIMITADO
    }
)

// EXPORTAÇÃO DA POOL
module.exports = pool
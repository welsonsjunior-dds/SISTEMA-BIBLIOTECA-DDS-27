// IMPORTANDO O MÓDULO DO MYSQL PARA CONECTAR AO BANCO
const { Connection } = require("mysql2")
const mysql = require("mysql2/promise")

// CRIA UMA POOL DE CONEXÃO PARA EVITAR ERROS NO BANCO POR SUPERLOTAÇÃO
const pool = mysql.crestePool(
    {
    host: process.env.DB_HOST, // ONDE O BANCO ESTÁ HOSPEDADO
    user: process.env.DB_USER, // ONDE QUE FARÁ A CONEXÃO
    password: process.env.DB_PASSWORD, // SENHA DO USUARIO
    database: process.env.DB_NAME, // BANCO AO QUAL SE DESEJA CONECTAR,
    // SE TODOSS ESTIVEREM OCUPADOS, DEIXA ESPERANDO, SEM DAR ERRO
    waiForConnections: true,
    // QUANTIDADE MAXIMA DE CONEXÕES AO MESMO TEMPO
    connectionLimit: 10,
    // MAXIMO DE LISTA DE ESPERA
    queueLimit: 0 // 0 = ILIMITADO
    }
)

// EXPORTAÇÃO DA POOL
module.exports = pool
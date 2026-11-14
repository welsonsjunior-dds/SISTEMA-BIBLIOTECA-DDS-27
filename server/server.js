// IMPORTAÇÃO DOS MÓDULOS
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();

// MÓDULO DO NODE PARA LIDAR COM CAMINHO DE ARQUIVOS
const path = require("path")

// IMPORTAR O MÓDULO DO DOTENV E LER O ARQUIVO .ENV
require("dotenv").config();

// DEFINE A PORTA DO SERVIDOR
const port = process.env.PORT || 5000;

// CONFIGURAR O EJS COMO TEMPLATE ENGINE
// DEFINE O EJS COMO ENGINE DO FRONT - INTERPRETA AS PÁGINAS | 
app.set("view engine", "ejs")
// APONTAR PARA O EJS ONDE ESTÃO AS PÁGINAS
app.set("views", path.join(__dirname, "../client/views"))


// CONFIGURAÇÃO DO BANCO DE DADOS
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// CRIAÇÃO DAS ROTAS
// ROTAS PÚBLICAS
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/login", (req, res) => {
    res.render('login');
});

// FORÇA A CONEXÃO COM O BANCO E INICIA O SERVIDOR
(async () => {
    try {
        // SE O BANCO ESTIVER ATIVO, TESTA E LIBERA A CONEXÃO
        const connection = await pool.getConnection();
        connection.release();
        console.log("Banco conectado");

        // SE O BANCO SUBIU, SOBE O BACKEND
        app.listen(port, () => {
            console.log(`Servidor na porta: ${port}`);
            console.log(`Link: http://localhost:${port}`);
        });
    } catch (erro) {
        // SE DEU ERRO ELE AVISA E ENCERRA A TENTATIVA
        console.log("Erro ao conectar com o banco:", erro.message);
        process.exit(1);
    }
})();
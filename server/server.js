// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const app = express()

// DEFINE A PORTA DO SERVIDOR 
const port = 5000

// CRIAÇÃO DAS ROTAS
// ROTAS PÚBLICAS
app.get("/", (req, res) => {
    res.send("Parabéns, você conseguiu")
})

// FUNÇÃO PARA SUBIR O SERVIDOR
app.listen(port, () =>{
    console.log(`Servidor na porta: ${port}`);
    console.log(`Link: http://localhost:${port}`);
})
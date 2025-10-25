require('dotenv').config();
const express = require("express")
const app = express();
const rotasProduto = require("./routes/produtosRoutes")


app.get('/',(req, res) => {
    res.send("Olá, Mundo");
});

app.use(express.json())
app.use(rotasProduto)

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando na porta 3000")
})
require('dotenv').config();
const express = require("express")
const cors = require("cors");
const app = express();
const rotasProduto = require("./routes/produtosRoutes")


app.get('/',(req, res) => {
    res.send("Olá, Mundo");
});
app.use(cors());
app.use(express.json())
app.use(rotasProduto)

app.listen(process.env.PORT || 3001, () => {
    console.log("Servidor rodando na porta 3001")
})
const express = require("express");
const cors = require("cors");

const servicoRoutes = require("./routes/servicoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/servicos", servicoRoutes);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
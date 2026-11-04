const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>DataVision</h1><p>Aplicacion desplegada en AWS EC2</p>");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("DataVision funcionando en puerto 3000");
});
const express = require('express');
const app = express();

// http://localhost:3000/

// app.use(express.static("public"));

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));



app.get('/', (req, res) => {
    res.send("Hola Express!!!");
});


app.get('/factura', (req, res) => {
    // LOGIN
    res.sendFile(path.join(__dirname, 'private', 'factura.html'));
});


// app.get("/frutas", (req, res) => {
//     res.sendFile(path.join(__dirname, "frutas.json"));
// });

app.get("/frutas", (req, res) => {
    console.log(req.query);
    res.sendFile(path.join(__dirname, "frutas.json"));
});



app.get('/frutas/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Una Fruta con el id: ' + req.params.id);
});



const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

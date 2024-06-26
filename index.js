const express = require('express');
const app = express();




// app.use(express.static("public"));

const path = require("path");

// MIDDLEWARE para archivos estáticos y publicos
app.use(express.static(path.join(__dirname, "public")));



// app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// UMA OPCION 
// const productosRouter = require("./routes/productos.router.js");
// app.use("/productos", productosRouter);


//outra maneira mas resumida //

app.use("/productos", require("./routes/productos.router"));



// Ruta principal, la pagina de inicio
// http://localhost:3000/
app.get('/', (req, res) => {
    res.send("Hola Express!!!");
});


// Esta ruta es para mostrar un archivo en una carpeta privada
// Puedo mas adelante controlar quien tiene acceso
app.get('/factura', (req, res) => {
    // LOGIN
    res.sendFile(path.join(__dirname, 'private', 'factura.html'));
});



// En esta ruta se envia un archivo JSON

// app.get("/frutas", (req, res) => {
//     res.sendFile(path.join(__dirname, "frutas.json"));
// });

app.get("/frutas", (req, res) => {
    // Con el query se pueden enviar cadenas de consultas
  // Ejemplo: /frutas?order=nombre&limit=5
    console.log(req.query);
    res.sendFile(path.join(__dirname, "frutas.json"));
});



app.get('/frutas/:id', (req, res) => {
    // Con los params se puede obtener parámetros definidos en la ruta
    console.log(req.params.id);
    res.send('Una Fruta con el id: ' + req.params.id);
});



const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

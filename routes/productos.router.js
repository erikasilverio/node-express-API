const express = require("express");
const router = express.Router();




// const productos = [
//     {id: 1, nombre: "Producto Nro. 1" },
//     {id: 3, nombre: "Producto Nro. 3" },
//     {id: 4, nombre: "Producto Nro. 4" },
//     {id: 7, nombre: "Producto Nro. 7" },
// ]

const controller = require("../controllers/productos.controller");

router.get("/", controller.index);


// // /productos/:id
// router.get("/:id", (req, res) => {
//     const { id } = req.params; 

//     const producto = productos.find((elemento) => elemento.id == id);
//     // console.log(producto);

//     res.json(producto);
// });



// router.post("/", (req, res) => {
    // console.log(req.body, productos[productos.length - 1], productos.length);

//     const id = productos[productos.length - 1].id + 1;

//     const producto = {
//         id: id,
//         nombre: req.body.nombre,
//     };

//     productos.push(producto);

//     res.status(201).send(producto);
// });


router.get("/:id", controller.show);
router.post("/", controller.store);

// /productos/:id

// router.put("/:id",(req,res) => {
//     const{ id } = req.params;
//     const { nombre } = req.body;

//     const producto = productos.find((elemento) => elemento.id == id);
     // console.log(producto);
//     if (!producto){
//         return res.status(404).json({ error: "No se encontro el producto"});
//     }

//     producto.nombre = nombre;

//     res.json(producto)
// });

// router.delete("/:id",(req, res) => {
//     const{ id } = req.params;

//     const producto = productos.find((elemento) => elemento.id == id);

//     if (!producto){
//         return res.status(404).json({ error: "No se encontro el producto"});
//     }

//     const productoIndex = productos.findIndex((elemento) => elemento.id == id);
//     productos.splice(productoIndex, 1);
    
//     res.send(producto);

// })


router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);


module.exports = router;

const express = require('express');
const cors = require('cors');
const app = express();
let vehiculos = [{placa:'AFV3456',marca:'Nissan',modelo:'Versa'}];

app.use(cors());
app.use(express.json());

app.get('/vehiculos', (req, res) => {
    res.json({ vehiculos })
});

app.get('/vehiculos/:id', (req, res) => {
    let placa = req.params.id
    for (let i = 0; i < vehiculos.length; i++){
        if (placa == vehiculos[i].placa) {
            res.json({vehiculo: vehiculos[i]})       
        }
    }
})

app.post('/vehiculos', (req, res) => {
    let vehiculo = req.body
    let placa = vehiculo.placa
    let indice = vehiculos.findIndex((coche) => coche.placa === placa)
    if (indice == -1) {
        vehiculos.push(vehiculo);
    }
    console.log(vehiculos)
    res.json({tipo: "agregar"})
})

app.delete('/vehiculos/:id', (req, res) => {
    let placa = req.params.id
    let indice = vehiculos.findIndex((vehiculo) => vehiculo.placa === placa)
    vehiculos.splice(indice, 1)
    res.json({tipo: "eliminar"})
})

app.listen(3000, console.log("Escuchando en puerto 3000"));


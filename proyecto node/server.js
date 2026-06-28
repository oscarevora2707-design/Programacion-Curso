const express = require('express');
const app = express();
const port = 3000;
const tareas = [
    { id: 1, descripcion: "Hacer la compra" },
    { id: 2, descripcion: "Llamar al médico" }
];

app.get ('/', (req, res)  => {
    res.send('Estoy aprendiendo node');
});

app.get('/api/tareas', (req, res) => {
    res.json(tareas);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


import 'dotenv/config'
import express from "express";
import { personajesDB } from './models/personajes.js';
const app = express();
const port = process.env.PORT || 3000;

app.get("/personajes", (req, res) => {
  res.send(personajesDB);
});

//obtener info de personajes por id
app.get("/personajes/:id", (req, res) => {
    const id = req.params.id
     const personaje = personajesDB.find((personaje) => personaje.id == id)
     if (!personaje) {
        return res.status(404).json({ error: "recurso no encontrado" })
     }
     return res.json(personaje)
})

app.post("/personajes",(req, res) =>{
    if (!req.body.nombre || !req.body.edad || !req.body.descripcion || !req.body.poder) {
        res.status(400).json({ error: "Error en la peticion" });
    }
})

app.use((req,res) => res.status(404))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

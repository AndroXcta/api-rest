import { personajesDB } from "../models/personajes.js";
import { randomUUID } from "node:crypto";

export const getCharacter = (req, res) => {
  res.send(personajesDB);
};

export const getCharacterByid = (req, res) => {
  const id = req.params.id;
  const personaje = personajesDB.find((personaje) => personaje.id == id);
  if (!personaje) {
    return res.status(404).json({ error: "recurso no encontrado" });
  }
  return res.json(personaje);
};

export const createCharacter = (req, res) => {
    if (
      typeof req.body.nombre !== "string" ||
      typeof req.body.edad !== "number" ||
      typeof req.body.descripcion !== "string" ||
      !req.body.poder
    ) {
      res.status(400).json({ error: "Error en la peticion" });
    }
    const { nombre, edad, descripcion, poder } = req.body;
    const usuarioNuevo = {
      id: randomUUID(),
      nombre,
      edad,
      descripcion,
      poder,
    };
    personajesDB.push(usuarioNuevo);
    return res.status(201).json(usuarioNuevo);
  };
  
export const updateCharacter = (req, res) => {
    const id = req.params.id;
    const index = personajesDB.findIndex(
      (personajesDB) => personajesDB.id === id
    );
    if (index === -1) {
      return res.status(404).json({ error: "personaje no encontrado" });
    }
  
    const characterUpdate = {
      ...personajesDB[index],
      ...req.body,
    };
    personajesDB[index] = characterUpdate;
    res.json(characterUpdate);
  };

export const deleteCharacter = (req, res) => {
    const id = req.params.id;
    const index = personajesDB.findIndex((personaje) => personaje.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      personajesDB.splice(index, 1);
      res.json({ message: "Usuario eliminado correctamente" });
    }
  };
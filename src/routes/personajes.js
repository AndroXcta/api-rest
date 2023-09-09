import { Router } from "express";
import {
    getCharacterByid,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} from "../controllers/personajes.js";

export const personajeRouter = Router()

personajeRouter.get("/", getCharacter)
personajeRouter.get("/:id", getCharacterByid)
personajeRouter.post("/", createCharacter)
personajeRouter.patch("/:id", updateCharacter)
personajeRouter.delete("/:id", deleteCharacter)
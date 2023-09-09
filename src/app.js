import "dotenv/config";
import express, { json } from "express";
import { personajeRouter } from "./routes/personajes.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/personajes", personajeRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Recurso on encontrado",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

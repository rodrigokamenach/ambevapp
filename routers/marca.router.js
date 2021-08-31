import express from "express";
import MarcaControler from "../controlers/marca.controler.js"
const router = express.Router();

router.post("/", MarcaControler.createMarca);
router.put("/", MarcaControler.updateMarca);
router.delete("/:id", MarcaControler.deleteMarca);
router.get("/", MarcaControler.getMarcas);
router.get("/:id", MarcaControler.getMarca);

export default router;
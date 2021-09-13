import express from "express";
import MarcaControler from "../controlers/marca.controler.js"
import authControler from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/", authControler.verifyToken, MarcaControler.createMarca);
router.put("/", authControler.verifyToken, MarcaControler.updateMarca);
router.delete("/:id", authControler.verifyToken, MarcaControler.deleteMarca);
router.get("/", authControler.verifyToken, MarcaControler.getMarcas);
router.get("/:id", authControler.verifyToken, MarcaControler.getMarca);

export default router;
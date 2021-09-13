import express from "express";
import ContagemControler from "../controlers/contagem.controler.js"
import authControler from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/", authControler.verifyToken, ContagemControler.createContagem);
router.put("/", authControler.verifyToken, ContagemControler.updateContagem);
router.delete("/:id", authControler.verifyToken, ContagemControler.deleteContagem);
router.get("/", authControler.verifyToken, ContagemControler.getContagems);
router.get("/:id", authControler.verifyToken, ContagemControler.getContagem);

export default router;
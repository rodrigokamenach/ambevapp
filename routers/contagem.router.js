import express from "express";
import ContagemControler from "../controlers/contagem.controler.js"
const router = express.Router();

router.post("/", ContagemControler.createContagem);
router.put("/", ContagemControler.updateContagem);
router.delete("/:id", ContagemControler.deleteContagem);
router.get("/", ContagemControler.getContagems);
router.get("/:id", ContagemControler.getContagem);

export default router;
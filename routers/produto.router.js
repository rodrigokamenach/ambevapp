import express from "express";
import ProdutoControler from "../controlers/produto.controler.js"
import authControler from "../controlers/auth.controler.js";
const router = express.Router();

router.post("/", authControler.verifyToken, ProdutoControler.createProduto);
router.put("/", authControler.verifyToken, ProdutoControler.updateProduto);
router.delete("/:id", authControler.verifyToken, ProdutoControler.deleteProduto);
router.get("/", authControler.verifyToken, ProdutoControler.getProdutos);
router.get("/:id", authControler.verifyToken, ProdutoControler.getProduto);

export default router;
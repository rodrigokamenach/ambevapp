import express from "express";
import ProdutoControler from "../controlers/produto.controler.js"
const router = express.Router();

router.post("/", ProdutoControler.createProduto);
router.put("/", ProdutoControler.updateProduto);
router.delete("/:id", ProdutoControler.deleteProduto);
router.get("/", ProdutoControler.getProdutos);
router.get("/:id", ProdutoControler.getProduto);

export default router;
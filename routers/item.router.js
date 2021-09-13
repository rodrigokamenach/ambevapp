import express from "express";
import ItemControler from "../controlers/item.controler.js"
import authControler from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/", authControler.verifyToken, ItemControler.createItem);
router.put("/", authControler.verifyToken, ItemControler.updateItem);
router.delete("/:id", authControler.verifyToken, ItemControler.deleteItem);
router.get("/", authControler.verifyToken, ItemControler.getItems);
router.get("/:id", authControler.verifyToken, ItemControler.getItem);

export default router;
import express from "express";
import ItemControler from "../controlers/item.controler.js"
const router = express.Router();

router.post("/", ItemControler.createItem);
router.put("/", ItemControler.updateItem);
router.delete("/:id", ItemControler.deleteItem);
router.get("/", ItemControler.getItems);
router.get("/:id", ItemControler.getItem);

export default router;
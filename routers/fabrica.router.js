import express from "express";
import FabricaControler from "../controlers/fabrica.controler.js"
const router = express.Router();

router.post("/", FabricaControler.createFabrica);
router.put("/", FabricaControler.updateFabrica);
router.delete("/:id", FabricaControler.deleteFabrica);
router.get("/", FabricaControler.getFabricas);
router.get("/:id", FabricaControler.getFabrica);

export default router;
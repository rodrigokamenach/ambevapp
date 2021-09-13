import express from "express";
import FabricaControler from "../controlers/fabrica.controler.js"
import authControler from "../controlers/auth.controler.js";

const router = express.Router();

router.post("/", authControler.verifyToken, FabricaControler.createFabrica);
router.put("/", authControler.verifyToken, FabricaControler.updateFabrica);
router.delete("/:id", authControler.verifyToken, FabricaControler.deleteFabrica);
router.get("/", authControler.verifyToken, FabricaControler.getFabricas);
router.get("/:id", authControler.verifyToken, FabricaControler.getFabrica);

export default router;
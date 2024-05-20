import {Router} from "express";
import {getGastos, getGastosByCategory, createGasto, updateGasto, deleteGastos} from "../controllers/gastos"


const gastosRoutes = Router();


gastosRoutes.get("/", getGastos)
gastosRoutes.get("/:category", getGastosByCategory)
gastosRoutes.post("/", createGasto)
gastosRoutes.put("/:id", updateGasto)
gastosRoutes.delete("/:id", deleteGastos)

export default gastosRoutes;
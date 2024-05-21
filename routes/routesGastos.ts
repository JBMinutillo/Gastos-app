import {Router} from "express";
import {getGastos, getGastosByid, createGasto, updateGasto, deleteGastos } from "../controllers/gastos"


const gastosRoutes = Router();


gastosRoutes.get("/", getGastos)
gastosRoutes.get("/:id", getGastosByid)
gastosRoutes.post("/", createGasto)
gastosRoutes.put("/:id", updateGasto)
gastosRoutes.patch("/:id", updateGasto)
gastosRoutes.delete("/:id", deleteGastos)

export default gastosRoutes;
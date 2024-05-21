import { Request, Response } from "express";
import Gastos, { IGastos}  from "../models/gastos";


export const getGastos = async({}, res: Response) => {
    const condition = {state:true}

    const gastos = await Gastos.find(condition);


    res.json({gastos});

    console.log("Gastos obtenidos");
    
    
}

export const getGastosByid  = async(req:Request, res: Response) => {
    const {id} = req.params;
     
    const gastoSaved : IGastos | null  = await Gastos.findOne({id:id});

    res.json({gastoSaved});

    console.log("Gastos obtenidos");
    
    
}


export const createGasto = async(req:Request, res: Response) => {

    const gastoData : IGastos = req.body;
    const gasto = new Gastos(gastoData);

    await gasto.save();


    res.json({
        message: "Gasto creado",
        gasto
        });

    console.log("Gasto creado");
    
}

export const updateGasto = async (req: Request, res: Response) => {
    const { id } = req.params;

    const {...data} = req.body;

    const gastos = await Gastos.findOneAndUpdate({id: id}, data);

    res.json({
        gastos
    })
};


export const deleteGastos = async(req:Request, res: Response) => {
    const { id } = req.params;

    const gastos = await Gastos.findOneAndDelete({id:id});

    if(!gastos) {
        res.json({
            msg: "El gasto no fue enocntrado en la DB"
        })
        return
    }

    res.json({
        gastos
    })
    
}
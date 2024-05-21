import express, {Express} from 'express';
import gastosRoutes from '../routes/routesGastos';
import {conectarDB} from '../database/config';
export class Server {

    app:Express;
    
    constructor() {
        this.app=express();
        this.conexionaDB();
        this.middlewares();
        this.routes();
       
    }

    async conexionaDB():Promise<void> {
        await conectarDB();
    }

    middlewares() :void {
        this.app.use(express.json())
    }

    routes():void {
        this.app.use('/gastos', gastosRoutes)
    }

    listen():void {
        this.app.listen(8085, () => {
          console.log("Servidor iniciado en puerto 8080")
        })
    }

}
import express, {Express} from 'express';
import gastosRoutes from '../routes/routesGastos';
import {connectDB} from '../database/config';

export class Server {
    app:Express;

    constructor(){
        this.app=express();
        this.conectionDB();
        this.middlewares();
        this.routes();
            
    }

    
    async conectionDB():Promise<void>{
        await connectDB();
    }
    middlewares():void{
        this.app.use(express.json())
    }
    routes():void {
        this.app.use('/gastos', gastosRoutes)
    }
    listen():void{
        this.app.listen(8080,() => {
          console.log("http://localhost:",8080)
        })
    }

}
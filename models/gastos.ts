import {Model, Schema, model} from 'mongoose'


export interface IGastos {
    id: number;
    user: string;
    gasto: number;
    category: string;
    state: boolean;
}

const GastosSchema = new Schema<IGastos>({
    id: {type: Number, required: true, unique: true},
    user: {type: String, required: true},
    gasto: {type: Number, required: true},
    category: {type: String, required: true},
    state: {type: Boolean, required: true, default: true}
});



const Gastos: Model<IGastos> = model<IGastos>('Gastos', GastosSchema);

export default Gastos;
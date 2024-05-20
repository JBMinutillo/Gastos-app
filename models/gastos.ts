import {Model, Schema, model} from 'mongoose'


export interface IGastos extends Document {
    id: number;
    gasto: number;
    category: string;
    state: boolean;
}

const GastosSchema = new Schema<IGastos>({
    id: {type: Number, required: true},
    gasto: {type: Number, required: true},
    category: {type: String, required: true},
    state: {type: Boolean, required: true}
})

const Gastos: Model<IGastos> = model<IGastos>("Gastos",GastosSchema);

export default Gastos;
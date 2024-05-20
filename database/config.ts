import mongoose from "mongoose";

export const connectDB = async ():Promise<void> => {
    try {
        await mongoose.connect('mongodb+srv://jbminutillo:aAbEGoFvs8lwdWCV@cluster0.2kgkwla.mongodb.net/')
        console.log('base de datos')

    }catch(error){
        console.log(error)
        throw new Error("error al iniciar base de datos")
    }
}
import mongoose from "mongoose";

export const conectarDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log('>>DB Connected<<')
    } catch (error) {
        console.log(error);
    }
}
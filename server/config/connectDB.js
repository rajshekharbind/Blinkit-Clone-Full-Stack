import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


if(!process.env.MONGODB_URI){
    throw new Error(
        "please provide mpngoodb uri in the .env file"
    )
}
async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGODB_URI)
       console.log('connected db');
    }
    catch(error){
        console.log("mongodb connected error",error);
        process.exit();
    }
}
export default connectDB;
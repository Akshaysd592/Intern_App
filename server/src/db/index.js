import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';


const dbConnect = async()=>{
    try {
        const response = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)

        if(response){
            console.log(`\n Database connected Successfully at.. ${response.connection.host}`)
        }
        
    } catch (error) {
        console.log("Database is not connected",  error);
        process.exit(1);
    }
}

export {dbConnect};
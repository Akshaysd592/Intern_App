import { dbConnect } from './db/index.js';
import {app} from './app.js'
import dotenv from 'dotenv';

dotenv.config(
    {
        path: './.env'
    }
);

dbConnect().then(()=>{ // database connection
   
    // server started
    app.listen(`${process.env.PORT}`|| 4000,()=>{
        console.log(`Server started at port ${process.env.PORT}`)
    })

})
.catch((error)=>{
    console.log(`Server can not be started due to ${error}`)
})
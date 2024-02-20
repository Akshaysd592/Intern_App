import express from 'express'

const app = express();
import cors from 'cors'

import dotenv from 'dotenv';

dotenv.config(
 {
    path: './.env'
 }
);

// middlewares
app.use(express.json({limit:"16kb"}));
app.use(cors({
   origin:process.env.CORS_ORIGIN,
   credentials:true
}))



export {app};
import mongoose from "mongoose";


const educationSchema  = new mongoose.Schema({
    educationType :{
        type:String,
        enum:["School","College"],
        required:true,
    },
    name:{
        type: String,
        required:true,
        trim:true,
    },
    startDate:{
        type:Date,
       
    },
    endDate:{
        type:Date,
        
    }


},
{
    timestamps:true
})


export const Education = mongoose.model("Education",educationSchema)
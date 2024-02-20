import mongoose from "mongoose";


const pastExperienceSchema = new mongoose.Schema({
        experienceType:{
            type:String,
            enum:["Internship","Job"],
            required:true
        },
        companyName:{
            type:String,
            required:true,
        },
        companyLink:{
            type:String,
            
        },
        Role:{
            type:String,
        },
        startDate:{
            type:String,
        },
        endDate:{
            type:String,
        }
},
{
    timestamps:true
})


export const PastExperience = mongoose.model("PastExperience",pastExperienceSchema)
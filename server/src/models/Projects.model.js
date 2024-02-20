import mongoose from "mongoose";


const ProjectSchema  = new mongoose.Schema({
    projectName:{
        type:String,
    },
    projectDesc:{
        type:String,
    },
    projectGroup:{
        type:String,
        enum:["Solo","Group"],

    },
    projectLink:{
          type:String,
    }

},
{timestamps:true})


export const Projects = mongoose.model("Projects",ProjectSchema);
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
   email:{
      type:String,
      required:true,
   },
   name:{
        type:String,
        required:true,
        trim:true,
    },
    mobileNumber:{
        type:Number,   
    },
    additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile",   
    },
    educationalDetails:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Education",
    },
    projectDetails:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Projects"
      }
    ],
    pastExperience:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"PastExperience"
    },
    coin:{
      type:Number,

    }

    
},
{timestamps:true})


export const User = mongoose.model("User",UserSchema);
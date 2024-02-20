import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
       profilePicture:{
        type:String,
       },
       linkedInLink:{
        type:true,
        trim:true,
       },
       gitHubLink:{
        type:true,
         trim:true,
       },
       resume:{
        type:String,
        
       }
},
{timestamps:true}
)


export const Profile = mongoose.model("Profile",profileSchema);
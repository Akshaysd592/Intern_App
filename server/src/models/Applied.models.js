import mongoose from 'mongoose';

const appliedSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        required:true,
    }

})


export const Applied = mongoose.model("Applied", appliedSchema);
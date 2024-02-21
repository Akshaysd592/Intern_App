import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/User.model.js";




const Signup = asyncHandler(async(req,res)=>{
    const {email,otp} = req.body;
   

})
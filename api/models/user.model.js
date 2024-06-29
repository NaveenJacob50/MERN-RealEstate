import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{ timestamps:true })
//timestamps record create and update time of the user

const User=mongoose.model('User',userSchema)
//'User' is model name and 's' will be automatically added at the end of the model name by mongoDB itself

export default User
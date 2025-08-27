const mongoose=require("mongoose");

const bookedDateSchema=new mongoose.Schema({
    listing:{type:mongoose.Schema.Types.ObjectId,ref:"Listing"},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    start: Date,
    end: Date
},{timestamps:true})
module.exports=mongoose.model("BookedDate",bookedDateSchema);


const mongoose =require("mongoose");


const post = new mongoose.Schema({
       title:{
        type:String,
        required:true,
        length:100,
       },
       content:{
        type:String,
        required:true,
       }
})
module.exports=mongoose.model("post",post);
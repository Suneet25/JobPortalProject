let mongoose=require("mongoose");
let dotenv=require("dotenv");

dotenv.config();

let ConnectDB=()=>{
    mongoose.connect(process.env.MONGOURL);
}

module.exports=ConnectDB;
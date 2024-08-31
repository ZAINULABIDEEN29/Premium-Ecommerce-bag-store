const mongoose=require("mongoose");
const config=require("config");
const dbgr=require("debug")("development:mongoose"); //  set debug environment


mongoose
.connect(`${config.get("MONGODB_URI")}/Recreating-Scatch`)  //dynamic url using development jsom
.then(function(){
    dbgr("connected");
  
})
.catch(function(err){
    dbgr(err);
})

module.exports=mongoose.connection;
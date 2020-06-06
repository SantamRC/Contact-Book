const mongoose=require('mongoose');
const Schema= mongoose.Schema;

let contact=new Schema({
    name:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }
});

module.exports=mongoose.model('contact',contact);
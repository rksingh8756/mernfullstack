const mongoose=require('mongoose');

const Myschima= mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }, 
    phone:{
        type:String
    },
    gender:{
        type:String
    },
    city:{
        type:String
    },
    pass:{
        type:String
    },
});

const mypattern =new mongoose.model("problem",Myschima);
module.exports=mypattern;
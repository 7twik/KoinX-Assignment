const mongoose = require("mongoose");

const cryptoSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    symbol:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
}, { timestamps: true });


module.exports = mongoose.model("crypto", cryptoSchema);


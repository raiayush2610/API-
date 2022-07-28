const mongoose =require('mongoose');

// crete schema
 const formItemsSchema = new mongoose.Schema({
    event:{
        type :String
    }
 })

 const formItem =mongoose.model('formItem',formItemsSchema);
 
 module.exports= formItem;
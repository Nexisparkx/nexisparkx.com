const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    Fname:  {
          type:String,
          required:true 
        },
    Lname:{
            type:String,
            required:true 
          },
     EnrollNo:{
            type:String,
            required:true 
          },
        year:{
           type:String,
           required:true
    },
     branch:{
           type:String,
           required:true
    },
    section:{
          type:String,
          required:true  
        },
    number:{
          type: String,
          required:true  
    },
    email:{
          type:String,
          required:true  
    },
    domain: {
        type:String,
        required:true  
    },
    isLaptop: {
        type:Boolean,
        required:true     
    }
});


const REGISTRATION = mongoose.model("Register",registrationSchema);
module.exports = REGISTRATION ;
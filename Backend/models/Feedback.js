const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
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
    section:{
          type:String,
          required:true  
        },
    number:{
          type: String,
          required:true  
    },
   suggestion: {
          type:String,
          required:true  
    },
  rating:{
        type:String,  
        required:true  
    },

});

const FEEDBACK = mongoose.model("FEEDBACK",feedbackSchema);
module.exports = FEEDBACK;

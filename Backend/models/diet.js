const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
    food: [
        {
            name: {
                type: String,
            },
        }
    ],
    exercise: [
        {
            name: {
                type: String,  
            },
        }
    ],
    tip: {
        type: String,
    },
    diet: {
        type:String,
    },
    bmi:{
        type:String
    },
    bmr:{
        type:String
    }
});


const DIET = mongoose.model("dietinfo", dietSchema);
module.exports = DIET;


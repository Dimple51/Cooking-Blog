const { text } = require("express");
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:"This Field Is Required."
    },
    description: {
        type: String,
        required:"This Field Is Required."
    },    
    email: {
        type: String,
        required:"This Field Is Required."
    },  
    ingredients: {
        type: Array,
        required:"This Field Is Required."
    },
    category: {
        type: String,
        enum:["Thai", "American","Chinese","Mexican","Indian"],
        required:"This Field Is Required."
    },    
    image: {
        type: String,
        required:"This Field Is Required."
    }    
});

recipeSchema.index({ name: "text", description: text });

module.exports = mongoose.model("Recipe", recipeSchema);
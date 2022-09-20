const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This is required.'
    },
    description:{
        type: String,
        required: 'This is required.'
    },
    email:{
        type: String,
        required: 'This is required.'
    },
    ingredients:{
        type: Array,
        required: 'This is required.'
    },
    category:{
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian', 'Persian'],
        required: 'This is required.'
    },
    image:{
        type: String,
        required: 'This is required.'
    }

})

recipeSchema.index({ name: 'text', description: 'text'})

module.exports = mongoose.model('Recipe', recipeSchema)
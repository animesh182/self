const mongoose = require('mongoose')
const Srule = new mongoose.Schema({
    name: {
        type : String,
        required : [true,"Name cannot be empty"],
        trim : true,
        maxlength : [20,"Name cannot be more than 20 characters"],
    },
    completed: {
        type : Boolean,
        default : false,
    }
})

module.exports = mongoose.model('Lists', Srule)
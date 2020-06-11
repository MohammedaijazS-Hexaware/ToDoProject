const mongoose = require('mongoose')


const toDoSchema = new mongoose.Schema({

    Title:{
        type:String,
        required: true
    },

    ToDo: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Entire',toDoSchema)
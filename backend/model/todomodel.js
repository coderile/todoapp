const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    new_to_do:{
        type:String
    },
    status:{
        type:String,
        default:"pending"
    }
})
todoSchema.index({new_to_do: 'text'});
const ToDo = mongoose.model('todos',todoSchema)

module.exports= ToDo
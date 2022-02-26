const mongoose = require('mongoose')

//creating Schema
const Schema = mongoose.Schema

//creating todo Schema
const todoSchema = new Schema({
    task : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    isCompleted : {
        type : Boolean
    }
})

//creating model
const Todo = mongoose.model('Todo',todoSchema)

//export todo model
module.exports = Todo

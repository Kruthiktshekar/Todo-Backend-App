const Todo = require('../models/model')

//creating empty object
todoController = {}

//crud operation
//creating new todo
todoController.create = (req,res) => {
    const data = req.body
    const newtodo = new Todo(data)
    newtodo.save()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show particular todo
todoController.show = (req,res) => {
    const id = req.params.id
    Todo.findById(id)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to show all  todo's
todoController.showAll = (req,res) => {
    Todo.find()
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to update todo
todoController.update = (req,res) => {
    const id = req.params.id
    Todo.findByIdAndUpdate(id,req.body,{new:true})
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//to delete todo
todoController.delete = (req,res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
    .then((todo)=>{
        res.json(todo)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = todoController
const express = require('express')
const route = express.Router()

//importing todoControllers
const todoController = require('../app/controllers/todocontrollers')

route.get('/showAllTodo',todoController.showAll)
route.get('/showTodo/:id',todoController.show)
route.post('/createTodo',todoController.create)
route.put('/updateTodo/:id',todoController.update)
route.delete('/deleteTodo/:id',todoController.delete)

//export route
module.exports = route
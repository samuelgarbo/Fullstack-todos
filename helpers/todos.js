const db = require('../models');
const validator = require('express-validator');

exports.getTodos = (req, res)=>{
    db.Todo.find()
    .then(todos=>{
        res.json(todos);
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.postTodo = [
    //Validate that the task field is not empty
    validator.body('task', 'Task required').trim().isLength({min: 1}),
    //Sanitize (escape) the name field
    validator.body('name').escape(),
    //Process request after validation and sanitization
    (req, res)=>{        
        //Create object with escaped and trimmed data
        db.Todo.create(req.body)
        .then(newTodo=>{
             res.status(201).json(newTodo);
        })
        .catch(err=>{
            res.send(err)
        })
     }
]

 exports.getTodo = (req, res)=>{
    db.Todo.findById(req.params.todoId)
    .then(foundTodo=>{
        res.json(foundTodo);
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.updateTodo = [
     //Validate that the task field is not empty
     validator.body('task', 'Task required').trim().isLength({min: 1}),
     //Sanitize (escape) the name field
     validator.body('name').escape(),
     //Process request after validation and sanitization
     (req, res) => {
         db.Todo.findByIdAndUpdate(req.params.todoId, req.body, {new:true})
         .then(updatedTodo=>{
             res.json(updatedTodo);
         })
         .catch(err =>{
             res.send(err);
         })
     }
]

exports.deleteTodo = (req, res)=>{
    db.Todo.findByIdAndDelete(req.params.todoId)
    .then(deletedTodo=>{
        res.json(deletedTodo);
    })
    .catch(err=>{
        res.send(err);
    })
}

module.exports = exports;
const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/todos');
const { json } = require('body-parser');

router.route('/')
.get(helpers.getTodos)
.post(helpers.postTodo)

router.post('/', helpers.postTodo);

router.get('/:todoId', helpers.getTodo);

router.put('/:todoId', helpers.updateTodo);

router.delete('/:todoId', helpers.deleteTodo)

module.exports = router;
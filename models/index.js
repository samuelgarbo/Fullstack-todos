const mongoose = require('mongoose');
// mongoose.set('debug', true);
const connection = process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0-uhuud.azure.mongodb.net/todo-api?retryWrites=true&w=majority'
mongoose.connect(connection,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
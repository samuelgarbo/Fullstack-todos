const mongoose = require('mongoose');

// mongoose.set('debug', true);

const connection = process.env.MONGODB_URI ;
mongoose.connect(connection,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
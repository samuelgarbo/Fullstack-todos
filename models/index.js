const mongoose = require('mongoose');
import DB_URL from '../url';

// mongoose.set('debug', true);

const connection = process.env.MONGODB_URI || URL;
mongoose.connect(connection,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');
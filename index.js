const express = require('express'),
app = express(),
compression = require('compression'),
helmet = require('helmet'),
bodyParser = require('body-parser');

const PORT =  process.env.PORT || 3001;

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(helmet());

app.get('/', function(req, res){
    res.send('Hi there from express');
})

app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
    console.log('app is running on port '+PORT)
})
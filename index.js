const express = require('express'),
app = express(),
compression = require('compression'),
helmet = require('helmet'),
bodyParser = require('body-parser'),
const path = require('path');

const PORT =  process.env.PORT || 3001;

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(helmet());

// app.get('/', function(req, res){
//     res.send('Hi there from express');
// })

app.use('/api/todos', todoRoutes);

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, function(){
    console.log('app is running on port '+PORT)
})
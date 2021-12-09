const express = require('express');
const app = express();
// const indexRoute = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index')
//import mongoose from "mongoose";

// app.use('/',indexRoute)
// app.listen(3008, function(){
//     console.log('k pazo master por el puerto 3008')

// });
mongoose.connect('mongodb://localhost/bdmenu').then(db => console.log('contectado..')).catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/',indexRoute)
app.listen(3008, function(){
    console.log("por puerto")
});

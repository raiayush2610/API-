const dotenv = require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/events",{useNewUrlParser:true});

app.use(cors({origin:'*'}))
const Forms= require('./models/formItemsModel');

// Routes

const formItemRoute =require('./routes/formItem');

app.use('/api/v3/',formItemRoute);

// PORT

app.listen(4000, ()=> console.log("Server connected"));

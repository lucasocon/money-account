const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const router = require('./routes');

db('mongodb+srv://lucas:154Lomaskpo!@cluster0-rma8v.mongodb.net/backend_node?retryWrites=true&w=majority')

var app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

router(app)


app.listen(3000);
console.log('The app is running on http://localhost:3000');

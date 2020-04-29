const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const router = require('./routes');
require('dotenv').config()

db(process.env.DB_HOST)

var app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

router(app)

app.listen(process.env.PORT);
console.log(`The app is running on http://localhost:${process.env.PORT}`);

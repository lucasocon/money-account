const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes');
require('dotenv').config();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set('locked', false);

router(app);

app.listen(process.env.PORT || 3000);
console.log(`The app is running on http://localhost:${process.env.PORT || 3000}`);

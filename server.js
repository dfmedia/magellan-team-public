const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('express-cors');

const app = express();
const router = express.Router();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

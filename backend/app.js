const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/routes');

const hostname = 'localhost';
const port = '5000';

const app = express();
const express = require('express');
const bodyParser = require('body-parser');
const Router = require('./Router');
const Logger = require('../Middlewares/loggerMiddleware');
const Validation = require('../Middlewares/dateValidation');
const deleteM = require('../Middlewares/DeleteMiddleware');
const errorH = require('../Middlewares/errorHandling');

const app = express();

app.use(bodyParser.json());
app.use(deleteM);
app.use(Validation);
app.use(Logger);
app.use(Router);
app.use(errorH);

app.listen(8080);

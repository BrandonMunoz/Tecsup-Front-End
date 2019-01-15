'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');

var app = express();

require('./api/config/passport');

app.use(passport.initialize());

//cargar archivos de rutas (independitnest()

//middlewares

//CORS

var rutas_de_project = require('./routes/project');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
});

//Cargando archivo de rutas

app.use('/API',rutas_de_project);

module.exports = app;


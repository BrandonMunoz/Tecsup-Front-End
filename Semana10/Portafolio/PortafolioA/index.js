'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var puerto = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio')
                  .then(()=>{
                     console.log("Conexión a la base de gatos establecida con éxito...!");
                     app.listen(puerto,()=>{
                        console.log("Servidor corriendo perfectamente => localhost:3700");
                     });
                  }).catch(err=>{
                     console.log(err);
                  });

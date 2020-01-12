'use strict'

const express  = require('express');                            
const bodyParse= require("body-parser");
//const mongoose = require("mongoose");
var cors = require('cors')

const app=express();
const router  = express.Router();


//carregar models
//mongoose.connect("mongodb://teste:teste@ds151232.mlab.com:51232/loldigow").then(e=>{console.log("conectado ao bd")}).catch(error=>{console.log("nao conectado no banco de dados")})

//carrega as rotas
const index     =require("./routes/index/index");
const products  =require("./routes/products/products.js");

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



//app.use("/", index);
app.use("/products", products);

module.exports= app;
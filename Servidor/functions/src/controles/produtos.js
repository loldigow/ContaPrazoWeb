"use strict";
//const sleep= require("sleep");
const prazo= require("../app/conta_prazo");



exports.get= (req, res, next)=>{
    console.log("chamou porra");
    res.status(200).send({oi:"oi"})
}

exports.post=('/',(req, res, next)=>{    
    let retorno=prazo(req.body);
    res.status(200).send(retorno);
})

exports.put=('/',(req, res, next)=>{
    

    res.status(200).send({
        "rota ":'/',
        "content": "put"
    })
})


exports.delete=('/',(req, res, next)=>{
    

    res.status(200).send({
        "rota ":'/',
        "content": "delete"
    })
});

exports.options=('/', (req, res, next)=>{
    console.log(req.body);
    res.status(200).send({
        "nada":"nada"
    })
});

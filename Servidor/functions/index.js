"use strict"

const app     =require('./src/app.js');                        //instanciando o nosso app
const http    = require('http');                                //carregando o http server
const debug   = require('debug')('nodestr:server');             //carregando modulo de debug



const port= normalizarporta(process.env.PORT || '3000');       //pedaço de codigo responsavel por atribuir a port um numeor para porta
app.set('port', port);                                         //abrindo app em uma porta




const server=http.createServer(app);                           //criando server




server.listen(port);                                           //fazendo server ouvir porta



server.on("error", onError);                                   //quando app der erro chamar funcao onError                      
server.on("listening", onlistening);                           //quando server estiver ouvindo chamar funcao onlinsterning
console.log("rodando na porta ",port);                         //ué




function normalizarporta(val)                                  //funcao de tratamento de erro de porta
{                                                              //
    const port=parseInt(val, 10);                              //
    if(isNaN(port))                                            //
    {                                                          //
        return val;                                            //
    }                                                          //
    if(port >= 0)                                              //
    {                                                          //
        return port;                                           //
    }                                                          //
    return false;                                              //
}                                                              //////////////////////////////////////////



function onError(error) 
{
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind =typeof port ==='string'
    ? 'Pipe '+port
    : 'Port '+port;
    
    switch (error.code)
    {
        case "EACCES":
            console.error(bind+' Requires elevated privilegs');
            process.exit(1);
            break;
        case "EADORINUSE":
            console.log(bind +" is already in use");
            process.exit(1);
            break;
        default:
            process.exit(1);
    }
}



function onlistening()
{
    const addr=server.address();
    const bind=typeof addr === 'string' ?
     'pipe.'+addr:'port '+addr.port;
    debug("listening on "+bind);
}
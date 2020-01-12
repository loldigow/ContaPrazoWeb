var fs = require('fs');
 
var obj = {
    dia_valido(dia, mes, ano, milissegundos)                          //feriado 1  recesso 2 sabado 3 domingo 4
    {
        let lista=[];
        for(i=0; i<this.fileJsonFeriado.feriados.length; i++){
            
            if((dia+"/"+mes+"/"+ano)==this.fileJsonFeriado.feriados[i][0])
            {
                lista.push(1);
                lista.push(this.fileJsonFeriado.feriados[i][1]);
                return lista;
            }
        }
        for(i=0; i<this.fileJsonRecesso.recesso.length; i++){
            
            if((dia+"/"+mes+"/"+ano)==this.fileJsonRecesso.recesso[i][0])
            {
                    lista.push(2);
                    lista.push(this.fileJsonRecesso.recesso[i][1]);
                    return lista;
            }
        }
        let aux=new Date(milissegundos);
        if(aux.getDay()==0){
                lista.push(4);
                lista.push("domingo");
                return lista;
        }
        if(aux.getDay()==6)
        {
            lista.push(3);
            lista.push("sabado");
            return lista;
        }
        
        lista.push(0);
        lista.push("");
        return lista;

    }, 
    dia(dia, mes, ano, milissegundos)
    {
        let retur=[];
        for(i=0; i<this.fileJsonFeriado.feriados.length; i++){
            
            if((dia+"/"+mes+"/"+ano)==this.fileJsonFeriado.feriados[i][0]) //vermelho
            {
                retur.push(dia);
                retur.push("#FF0000");
                retur.push(this.fileJsonFeriado.feriados[i][2]);
            }
        }
        for(i=0; i<this.fileJsonRecesso.recesso.length; i++){
            
            if((dia+"/"+mes+"/"+ano)==this.fileJsonRecesso.recesso[i][0])//cinza
            {
                retur.push(dia);
                retur.push("#696969");
                retur.push(this.fileJsonFeriado.recesso[i][2]);
            }
        }
        let aux=new Date(milissegundos);
        if(aux.getDay()==0){retur.push(dia);retur.push("#696969");retur.push("domingo")}
        else if(aux.getDay()==6){retur.push(dia);retur.push("#696969");retur.push("sabado")}
        else{retur.push(dia);}
        return retur;

    },
    inicializa(){
        this.inicializaferiado();
        this.inicializaRecesso();
        },
    getFileDbFeriado: function () {
       // console.log(__dirname+'/files/feriados.json');
        return  __dirname + '/files/feriados.json';
    },
    inicializaferiado: function () {
        var db = this.getFileDbFeriado();
        var fileContent = fs.readFileSync(db, 'utf8');
        this.fileJsonFeriado=[];
        if (fileContent) {
            this.fileJsonFeriado = JSON.parse(fileContent);
        }
        else console.log("erro de conteudo arquivo json");
        //console.log("aqui viado"+fileJson);
    },
    // saveDataFeriado: function (fileJson) {
    //     var db = this.getFileDbFeriado();
    //     var data = JSON.stringify(fileJson);
    //     fs.writeFileSync(db, data, 'utf8');
    //     return data;
    // },




    
    getFileDbRecesso: function () {
       // console.log(__dirname+'/files/recessos.json');
        return  __dirname + '/files/recessos.json';
    },
    inicializaRecesso: function () {
        var db = this.getFileDbRecesso();
        var fileContent = fs.readFileSync(db, 'utf8');
        this.fileJsonRecesso = [];
        if (fileContent) {
            this.fileJsonRecesso = JSON.parse(fileContent);
        }
    },
 
    // saveDataRecesso: function (fileJson) {
    //     var db = this.getFileDbRecesso();
    //     var data = JSON.stringify(fileJson);
    //     fs.writeFileSync(db, data, 'utf8');
    //     return data;
    // }
 
};
 
module.exports = obj;
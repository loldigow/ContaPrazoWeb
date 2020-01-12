"use strict"
const db= require("../banco/banco.js");


const preenche=function(params)
{
    if(params<10)
    {
        return ("0"+params.toString());
    }else return params;
}

const contaPrazo=function(params)
{
    db.inicializa();
    let retorno={"status":"1","mes":"janeiro","dias":[]};
    const dia=86400000;
    const aux=new Date(params.ano, params.mes-1, params.dia);
    let milissegundo=aux.getTime();
    let A;
    let atomo;
    A=new Date(milissegundo);
    let dias=[];
    let ultimo=0;
   
   
   ///ajeita visualização
    if((db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[0]!=0)
    {
        return {"status":"0","erro":"dia selecionado é "+(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[1]};
    }
    else
    {
        let complemento=milissegundo-(aux.getDay()*dia);


        let cont=0;
        do{
    
            A=new Date(complemento);
            atomo=(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),complemento))[0];
            switch(atomo)
            {
                case 1: //feriado
                    dias.push(preenche(A.getDate()));
                    dias.push("#FA8072");
                    dias.push("feriado");
                    retorno.dias.push(dias);
                    break;
                case 2: //recesso
                    dias.push(preenche(A.getDate()));
                    dias.push("#FA8072");
                    dias.push("recesso");
                    retorno.dias.push(dias);
                    break;
                case 4: //domingo
                    dias.push(preenche(A.getDate()));
                    dias.push("#DCDCDC");
                    dias.push("domingo");
                    retorno.dias.push(dias);
                    break;
                default:
                    dias.push(preenche(A.getDate()));
                    dias.push("#");
                    dias.push("");
                    retorno.dias.push(dias);
                    cont++;
                    break;
                
            }
            if(new Date(milissegundo).getDay()==0)ultimo=0;
            dias=[];
            complemento+=dia;
        }while(complemento!=milissegundo);


        A=new Date(milissegundo);
        dias.push(preenche(A.getDate()));
        dias.push("#00BFFF");
        dias.push("publicado");
        retorno.dias.push(dias);
        dias=[];
    }
    
    
    
    //prepara dia para começar a ler
    do{
        milissegundo+=dia;
        A=new Date(milissegundo);
        atomo=(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[0];
        switch(atomo)
        {
            case 1: //feriado
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("feriado");
                retorno.dias.push(dias);
                break;
            case 2: //recesso
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("recesso");
                retorno.dias.push(dias);
                break;
            case 3: //sabado
                if(ultimo==0)
                {
                    dias.push(preenche(A.getDate()));
                    dias.push("#DCDCDC");
                    dias.push("sabado");
                    retorno.dias.push(dias);
                    ultimo=1;
                }
                break;
            case 4: //domingo
                    dias.push(preenche(A.getDate()));
                    dias.push("#DCDCDC");
                    dias.push("domingo");
                    retorno.dias.push(dias);
                    ultimo=0;

        }
        if(new Date(milissegundo).getDay()==0)ultimo=0;
        dias=[];
    }while(atomo!=0);

    let cont=1;
    do{

        A=new Date(milissegundo);
        atomo=(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[0];
        switch(atomo)
        {
            case 1:
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push(cont+" feriado");
                retorno.dias.push(dias);
                cont++;
                break;
            case 2: //recesso
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("recesso");
                retorno.dias.push(dias);
                break;
            case 3:
            console.log("achei um sabado "+new Date(milissegundo).getDate());
            if(ultimo==0)
            {
                dias.push(preenche(A.getDate()));
                dias.push("#DCDCAB");
                dias.push(cont+" dia, sabado");
                retorno.dias.push(dias);
                ultimo=1;
                console.log("setei ultimo com 1");
                cont++;
            }
            break;
            case 4:
                dias.push(preenche(A.getDate()));
                dias.push("#DCDCDC");
                dias.push(cont+" dia, domingo");
                retorno.dias.push(dias);
                ultimo=0;
                console.log("setei ultimo com 0");
                cont++;
                break;
            default:
                dias.push(preenche(A.getDate()));
                dias.push("#66CDAA");
                dias.push((cont)+" dia");
                retorno.dias.push(dias);
                cont++;
                break;

        }
        if(new Date(milissegundo).getDay()==0)ultimo=0;

        console.log(" dia "+new Date(milissegundo).getDate());
        dias=[];
        milissegundo+=dia;
    }while(cont<params.prazo);

    console.log("saiu de la com dia "+new Date(milissegundo).getDate());
    
    
    
    do{

        A=new Date(milissegundo);
        atomo=(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[0];
        console.log("atomo ="+atomo);
        console.log("ultimo ="+ultimo);
        switch(atomo)
        {
            case 1: //feriado
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("feriado");
                retorno.dias.push(dias);
                break;
            case 2: //recesso
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("recesso");
                retorno.dias.push(dias);
                break;
            case 4: //domingo
                dias.push(preenche(A.getDate()));
                console.log("entrou");
                dias.push("#DCDCDC");
                dias.push("domingo");
                retorno.dias.push(dias);
                ultimo=0;
                break;
            case 3: //sabado

                dias.push(preenche(A.getDate()));
                dias.push("#DCDCDC");
                dias.push("sabado");
                retorno.dias.push(dias);
                ultimo=1;
                break;
        }
        dias=[];
        milissegundo+=dia;
    }while(atomo!=0);

    dias=[];
    dias.push(preenche(A.getDate()));
    dias.push("#66CDAA");
    dias.push(cont+" dia fora");
    retorno.dias.push(dias);
    dias=[];

    do{

        A=new Date(milissegundo);
        atomo=(db.dia_valido(preenche(A.getDate()),preenche(A.getMonth()+1),preenche(A.getFullYear()),milissegundo))[0];
        switch(atomo)
        {
            case 1: //feriado
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("feriado");
                retorno.dias.push(dias);
                break;
            case 2: //recesso
                dias.push(preenche(A.getDate()));
                dias.push("#FA8072");
                dias.push("recesso");
                retorno.dias.push(dias);
                break;
            case 4: //domingo
                dias.push(preenche(A.getDate()));
                dias.push("#DCDCDC");
                dias.push("domingo");
                retorno.dias.push(dias);
                ultimo=0;
                break;
            case 3: //sabado
            if(ultimo==0)
            {
                dias.push(preenche(A.getDate()));
                dias.push("#DCDCDC");
                dias.push("sabado");
                retorno.dias.push(dias);
                ultimo=1;
            }
                break;
        }
        if(new Date(milissegundo).getDay()==0)ultimo=0;
        dias=[];
        milissegundo+=dia;
    }while(atomo!=0);
    

    //data de transito
    dias=[];
    dias.push(preenche(A.getDate()));
    dias.push("#F0E68C");
    dias.push("transito em julgado dia "+preenche(A.getDate())+"/"+preenche(A.getMonth()+1)+"/"+A.getFullYear());
    retorno.dias.push(dias);


    //para completar a visualização
    while(new Date(milissegundo).getDay()!=0)
    {
        dias=[];
        dias.push(preenche(new Date(milissegundo).getDate()));
        dias.push("#");
        dias.push("");
        //console.log("dia "+new Date(milissegundo).getDate()+" = "+new Date(milissegundo).getDay());
        retorno.dias.push(dias);
        milissegundo+=dia;
    }

    return retorno
}
module.exports=contaPrazo;
"use strict"

function parse (data)
    {        
            let i=0;
            let line="";
            let cont=0;
            let dia;
            let mes;
            let ano;
            while(i<data.length)
            {
                if(data[i]=='/')
                {
                    if(cont==0)
                    {
                        dia=line;
                        line="";
                        cont++;
                    }
                    else if(cont==1)
                    {
                        mes=line;
                        line="";
                        cont++;
                    }
                    i++;
                }else 
                {
                    line+=data[i];
                    i++;
                }
            }
                ano=line;
                if(dia_valido(dia, mes, ano)){
                    let saida=[];
                    saida.dia=dia;
                    saida.mes=mes;
                    saida.ano=ano;
                    return saida;
                }
                else{
                    return null;
                }

        }
function dia_valido(d, m, a)
        {
            let dia=parseInt(d);
            let mes=parseInt(m);
            let ano=parseInt(a);
            console.log(dia+"/"+mes+"/"+ano);
            switch(dia)
            {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                    console.log("dias 1 a 28");
                    switch(mes){
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                            if(ano>0)return true;
                    }
                case 29:
                    console.log("dia 29");
                    switch(mes)
                    {
                        case 2:
                            if(ano%4==0)return true;
                            else return false;
                            break;
                        default:
                        switch(mes){
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                                if(ano>0)return true;
                        }

                    }
                
                case 30:
                    console.log("dia 30");
                    switch(mes)
                    {
                        case 2:
                            return false;
                        default:
                        switch(mes){
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                                if(ano>0)return true;
                        }
                    }
                
                case 31:
                 console.log("dia 31");
                    switch(mes)
                    {
                        case 2:
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            return false;
                        default: 
                            switch(mes){
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                case 11:
                                case 12:
                                    if(ano>0)return true;
                            }

                    }
                default :
                    console.log("ppadrao");
                 return false;
            }
        }
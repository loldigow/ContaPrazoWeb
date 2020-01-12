window.onload = function(e)
{ 
    const entrada= this.document.getElementById("entrada");
    const botao=   this.document.getElementById("enter");
    const modal=this.document.getElementById("modal");
    const calendario= this.document.getElementById("calendario");
    const dias=this.document.getElementById("dias");


    botao.addEventListener("click", function(){
        let data= entrada.value;
        let date=parse(data);
        if(date==null){
            entrada.style.color="red";
            entrada.style.border="1px solid red";
            alert("Data invalida");
        }
        else{
            entrada.style.color="black";
            entrada.style.border="1px solid black";
            entrada.style.borderBottom="0px";
            entrada.style.borderRight="0px";
            request(date);
        }
    });

   function modalview(){
       console.log("ativando");
        modal.style.display="block";
   }
   function modalhidde(){
        console.log("ocutando");
        modal.style.display="none";
    }
   
    request=function(params){
        modalview();
         const URL_TO_FETCH = 'http://localhost:3000/products';
         fetch(URL_TO_FETCH, {
             method: 'post',
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
             },

            body: JSON.stringify({dia:params.dia,mes:params.mes, ano:params.ano, prazo:dias.value})
         })
        .then(function(response) { 
            response.json().then(function(data){
                modalhidde();
                if(data.status==1)preenche(data.dias);
                else
                {
                    alert(data.erro);
                    entrada.style.color="red";
                    entrada.style.border="1px solid red";
                }

              });
        })
        .catch(function(err) { 
          console.error(err); 
          modalhidde();
        });

    }




        preenche = function(array){
                i=0;
                calendario.innerHTML="";
                while(i<array.length)
                {
                    var div = document.createElement('div');
                   // setTimeout(preence(array),1);
                    div.textContent=array[i][0];
                    div.setAttribute('class', 'teste');
                    div.setAttribute('title', array[i][2]);
                    console.log("cor para dia "+array[i][0]+" = "+array[i][1]);
                    div.style.background=array[i][1];
                    div.style.fontSize="25px";
                    div.style.padding="15px";
                    calendario.appendChild(div);
                    i++;
                }
        }
}

let placar = 0;
let contagem = 15;
let pontos = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function acertou1num(){
   
    pontos = pontos + 0.25;
    document.getElementById("pontos").innerHTML = "Pontos = " + pontos;
}

function acertou2num(){
   
    pontos = pontos + 0.5;
    document.getElementById("pontos").innerHTML = "Pontos = " + pontos;
}
function acertou3num(){

    pontos = pontos + 1.5;
    document.getElementById("pontos").innerHTML = "Pontos = " + pontos;
   
}
function setenum(){
    pontos = pontos * 7;
    document.getElementById("pontos").innerHTML = "Pontos = " + pontos;
}

function sum() 
{
    placar++;
    document.getElementById("jogadas").innerHTML = placar;
}

function sub(){
    if(contagem>=1){
        contagem--;
        document.getElementById("apost").innerHTML = contagem;
    }
    if(contagem<=0){
        contagem = 0;
        document.getElementById("apost").innerHTML = "Creditos: " + contagem;
        alert("acabou os creditos");
    }
       
}

function jogar(){

    sub();
    sum();
    var a = getRandomInt(7);
    var b = getRandomInt(7);
    var c = getRandomInt(7);
     
   
    document.getElementById("A").textContent = "|" + a + "|";
    document.getElementById("B").textContent = "|" + b + "|";
    document.getElementById("C").textContent = "|" + c + "|";
    document.getElementById("pontos").textContent = "Pontos = " + pontos;
    document.getElementById("apost").textContent = "Creditos: " + contagem; 
    document.getElementById("jogadas").textContent = "Jogadas: " + placar; 
    
            
        if(a!=b || a!=c || b!=c){
            if(pontos>=1){acertou1num();}
            document.getElementById("jogada").textContent = "PROXIMA TENTATIVA";
            if(a==b){

                if(pontos>=0){acertou2num();}
                document.getElementById("jogada").textContent = "ACERTOU A e B";

            }else

                if(b==c){
                if(pontos>=0){acertou2num();}
                document.getElementById("jogada").textContent = "ACERTOU B e C";

            }else

                if(a==c){
                if(pontos>=0){acertou2num();}
                document.getElementById("jogada").textContent = "ACERTOU A e C";

            }
        }else{
                if(pontos>=0){acertou3num();}
                document.getElementById("jogada").textContent = "ACERTOU A B C";
        }

        if(a&b&c == 7){
            setenum();
        }
                
   
}//Fazer função de add Credito



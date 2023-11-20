
    let placar = 0;
    let contagem = 15;
    let pontos = 0;
    let coin = 0;


function getRandomInt(max , min) {
    
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

}

function addficha(){

    coin = document.getElementById("ficha").value;
    contagem = contagem * coin;
    document.getElementById("apost1").textContent = "Ficha " + coin;
    document.getElementById("apost").textContent = "Creditos: " + contagem; 
}

function acertou1num(){
    pontos = pontos + 0.25;
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

function sum(){
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

    var a = getRandomInt(7,6);
    var b = getRandomInt(7,6);
    var c = getRandomInt(7,6);

    
   
    document.getElementById("A").textContent = "|" + a + "|";
    document.getElementById("B").textContent = "|" + b + "|";
    document.getElementById("C").textContent = "|" + c + "|";

    document.getElementById("pontos").textContent = "Pontos = " + pontos;
    document.getElementById("apost").textContent = "Creditos: " + contagem; 
    document.getElementById("jogadas").textContent = "Jogadas: " + placar; 
  
       
    if(a==7&&b==7&&c==7){
        setenum();
    }


    if(a!=b || a!=c || b!=c){

        if(pontos>=0){
            acertou3num();
            document.getElementById("jogada").textContent = "ACERTOU A B C";
        }

        if(pontos>=1){
                acertou1num();
                document.getElementById("jogada").textContent = "PROXIMA TENTATIVA";
        }

        if(a==b){

            if(pontos>=0){
                acertou2num();
                document.getElementById("jogada").textContent = "ACERTOU A e B";
            }
        }

        if(b==c){
            if(pontos>=0){
                acertou2num();
                document.getElementById("jogada").textContent = "ACERTOU B e C";
            }
        }

        if(a==c){
            if(pontos>=0){
                acertou2num();
                document.getElementById("jogada").textContent = "ACERTOU A e C";
            }
        }
    }
                
}

//Fazer função de add Credito



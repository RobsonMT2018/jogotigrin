
    let placar = 0;
    let CreditoAdicional = 0;
    let pontos = 0;
    let AdicionarCredito = 0;
    let multCredito = 0;


function getRandomInt(max , min) {
    
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

}

function addficha(){

    AdicionarCredito = document.getElementById("ficha").value;   
    multCredito = parseInt(AdicionarCredito) + parseInt(CreditoAdicional);
    document.getElementById("apost1").innerHTML= "Ficha " + AdicionarCredito;
    document.getElementById("apost").innerHTML = "Creditos: " + multCredito;
    
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
    
    }else{
        document.getElementById(el).style.display = 'none';
    }
}

function acertou1num(){
    pontos = pontos + 0.5;
}

function acertou2num(){
    pontos = pontos + 1;
    document.getElementById("pontos").innerHTML = "Pontos = R$" + pontos;
}

function acertou3num(){
    pontos = pontos + 1.5;
    document.getElementById("pontos").innerHTML = "Pontos = R$" + pontos;
}

function setenum(){
    pontos = pontos * 0.7;
    document.getElementById("pontos").innerHTML = "Pontos = R$" + pontos;
    console.log("777");
}

function sum(){
    placar++;
    document.getElementById("jogadas").innerHTML =  "Jogadas:" + placar;
}


function sub(){
    
  
    if(multCredito>=1){
        multCredito--;
        document.getElementById("apost").innerHTML = "Creditos: " + multCredito;
        
    }else{
        
        document.getElementById("apost").innerHTML =  "Creditos: " + multCredito;
        alert("acabou os creditos");
        Mudarestado(el);
    }
       
}

function Update(){


    var a = getRandomInt(7,1);
    var b = getRandomInt(7,1);
    var c = getRandomInt(7,1);

    document.getElementById("A").textContent = "|" + a + "|";
    document.getElementById("B").textContent = "|" + b + "|";
    document.getElementById("C").textContent = "|" + c + "|";

    document.getElementById("pontos").textContent = "Pontos = " + pontos;
    document.getElementById("apost").textContent = "Creditos: " + multCredito; 
    document.getElementById("jogadas").textContent = "Jogadas: " + placar; 

    

    if(multCredito<0){
        alert("Adicione os Creditos");

    }else{

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
       
    }else if(a==7&&b==7&&c==7){
        setenum();
    }

    }

}

function jogar(){

    sub();
    sum();
    Update();
}


//Fazer função de add Credito



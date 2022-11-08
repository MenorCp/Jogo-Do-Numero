var ReadLine = require('prompt-sync')();

function sortearNumber(){
    let numero = parseInt(Math.random() * 1000);
    return numero;
}

function main(){
    try{
        let a = sortearNumber();
        console.log('O numero foi sorteado');

        let resposta = '';
        let limite = 10;
        jogada = 0;

        for(let rodada = 1; rodada <= limite; rodada++){
            console.log('Jogada' + rodada + ', Insira seu numero !')
            jogada = ReadLine(Number());
            if(jogada == a){
                resposta = 'Parabens você ganhou !'
                rodada = 10
            }
            else if(jogada < a){
                resposta = 'Maior'
                console.log(resposta);
            }
            else if(jogada > a){
                resposta = 'Menor'
                console.log(resposta);
            }
            else if(rodada > 10){
                resposta = 'Perdeu :('
                console.log(resposta);
            }
        }
        if(resposta != 'Parabens você ganhou !'){
            resposta = 'Perdeu tente novamente.....'
        }
        else if(resposta == 'Parabens você ganhou !'){
            resposta = resposta
        }
        else{
            resposta = 'Alguma informação esta errada';
        }
        console.log(resposta);
    }
    catch(err){
        console.log(err.message);
    }
}

let a = main();
console.log(a);
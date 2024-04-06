// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número Secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'escolha um número entre 1 e 10';


// para no repetir lo mismo varias veces:

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numSec = NumAleat(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    
}

//para no repetir:
function mensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um úmero entre 1 e 10');

}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSec) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSec) {
            exibirTextoNaTela('p', 'o número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo(); 
    }


    console.log(chute == numSec);
}

function NumAleat() {
  let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return NumAleat();
  } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return NumeroEscolhido;
  }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}
 function reiniciarJogo() {
    numSec = NumAleat();
    limparCampo();
    tentativas =1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

 }








 
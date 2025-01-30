let listaNumSorteada = [];
let numeroLimite = 100; 
let numeroSecredo = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMsgInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p","Escolha um número entre 1 e 100");
}

exibirMsgInicial()

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecredo){
        exibirTextoNaTela("h1", "Acertou!!!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if (chute > numeroSecredo){
        exibirTextoNaTela("h1", "Não foi dessa vez!!!");
        exibirTextoNaTela("p", "O número secreto é menor!!!");
    }else{
        exibirTextoNaTela("h1", "Não foi dessa vez!!!");
        exibirTextoNaTela("p", "O número secreto é maior!!!");
    } 
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
    let numGerado = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosLista = listaNumSorteada.length;

    if (qtdElementosLista == numeroLimite){
        listaNumSorteada = [];
    }
    if (listaNumSorteada .includes(numGerado)){
        gerarNumeroAleatorio();
    }else{
        listaNumSorteada.push(numGerado);

        return numGerado;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function novoJogo(){
    document.getElementById("reiniciar").setAttribute("disabled", true);
    numeroSecredo = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
}
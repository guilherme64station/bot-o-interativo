//pega os elementos do botão "sim" e "não"
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");
//função que move o botão "não" para uma nova posição
botaoNao.addEventListener("mouseover", function(){
    // move o botão "não" aleatoriamente na tela 
    let posX = Math.random() * (window.innerWidth - botaoNao.
    offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoNao.
    offsetHeight);
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";
    // exibe a mensagem de erro
    mensagemErro.style.display = "block";
    });
    // mantém o botão "sim" fixo
    botaoSim.addEventListener("click", function(){
        alert("ótima escolha! minha chave pix é o n° do celular!");
    });
    // final
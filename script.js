// ENTRAR
function entrar() {
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}

// DATA
document.getElementById("dataAtual").innerText =
new Date().toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "numeric",
    month: "short"
});

// CONTADOR
const inicio = new Date("2025-12-21");

function atualizar() {
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000*60*60*24));
    const horas = Math.floor((diff / (1000*60*60)) % 24);
    const minutos = Math.floor((diff / (1000*60)) % 60);

    document.getElementById("contador").innerText =
        `${dias} dias • ${horas}h ${minutos}min 💗`;
}

setInterval(atualizar, 1000);

// MENSAGEM
const texto = "Eu sei que esse momento não é fácil… mas quero que você sinta que não está sozinha. Eu tô aqui com você, pra tudo. Você é muito importante pra mim, Larice. 💗";

let i = 0;

function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML = "";
    i = 0;
    escrever();
}

function escrever() {
    if (i < texto.length) {
        document.getElementById("mensagem").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 35);
    }
}

// MÚSICA
function abrirMusica() {
    window.open("https://www.youtube.com/watch?v=aR-V1qi_W_M");
}

// CORAÇÕES OTIMIZADOS
function coracoes() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 12 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(coracoes, 600);

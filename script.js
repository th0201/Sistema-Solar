
// ======================================
// INFORMAÇÕES DOS PLANETAS
// ======================================

const planetas = {

    mercurio: {
        nome: "Mercúrio",
        classe: "mercury",
        descricao:
            "Mercúrio é o planeta mais próximo do Sol e também o menor planeta do Sistema Solar.",

        diametro: "4.879 km",
        distancia: "57,9 milhões km",
        temperatura: "167 °C",
        luas: "0",
        ano: "88 dias",
        dia: "58,6 dias",

        curiosidade:
            "Apesar de ser o planeta mais próximo do Sol, Mercúrio não é o mais quente. Sua atmosfera é muito fina."
    },

    venus: {
        nome: "Vênus",
        classe: "venus",
        descricao:
            "Vênus é o segundo planeta a partir do Sol e possui uma atmosfera extremamente densa.",

        diametro: "12.104 km",
        distancia: "108,2 milhões km",
        temperatura: "464 °C",
        luas: "0",
        ano: "225 dias",
        dia: "243 dias",

        curiosidade:
            "Vênus gira no sentido contrário ao da maioria dos planetas e possui o dia mais longo do Sistema Solar."
    },

    terra: {
        nome: "Terra",
        classe: "earth",
        descricao:
            "A Terra é o terceiro planeta a partir do Sol e o único mundo conhecido onde existe vida.",

        diametro: "12.742 km",
        distancia: "149,6 milhões km",
        temperatura: "15 °C",
        luas: "1",
        ano: "365,25 dias",
        dia: "23h 56min",

        curiosidade:
            "Cerca de 71% da superfície da Terra é coberta por água. A atmosfera protege a vida e ajuda a manter temperaturas adequadas."
    },

    marte: {
        nome: "Marte",
        classe: "mars",
        descricao:
            "Marte é conhecido como o Planeta Vermelho por causa da presença de óxido de ferro em sua superfície.",

        diametro: "6.779 km",
        distancia: "227,9 milhões km",
        temperatura: "-63 °C",
        luas: "2",
        ano: "687 dias",
        dia: "24h 37min",

        curiosidade:
            "Marte possui o maior vulcão conhecido do Sistema Solar, o Monte Olimpo."
    },

    jupiter: {
        nome: "Júpiter",
        classe: "jupiter",
        descricao:
            "Júpiter é o maior planeta do Sistema Solar e é classificado como um gigante gasoso.",

        diametro: "139.820 km",
        distancia: "778,5 milhões km",
        temperatura: "-110 °C",
        luas: "95",
        ano: "11,86 anos",
        dia: "9h 56min",

        curiosidade:
            "A Grande Mancha Vermelha de Júpiter é uma enorme tempestade que existe há séculos."
    },

    saturno: {
        nome: "Saturno",
        classe: "saturn",
        descricao:
            "Saturno é um gigante gasoso famoso pelo seu impressionante sistema de anéis.",

        diametro: "116.460 km",
        distancia: "1,43 bilhão km",
        temperatura: "-140 °C",
        luas: "146",
        ano: "29,5 anos",
        dia: "10h 42min",

        curiosidade:
            "Os anéis de Saturno são formados principalmente por partículas de gelo, poeira e fragmentos rochosos."
    },

    urano: {
        nome: "Urano",
        classe: "uranus",
        descricao:
            "Urano é um gigante de gelo com uma característica muito peculiar: ele gira praticamente de lado.",

        diametro: "50.724 km",
        distancia: "2,87 bilhões km",
        temperatura: "-195 °C",
        luas: "28",
        ano: "84 anos",
        dia: "17h 14min",

        curiosidade:
            "O eixo de rotação de Urano é tão inclinado que o planeta parece estar girando de lado."
    },

    netuno: {
        nome: "Netuno",
        classe: "neptune",
        descricao:
            "Netuno é o planeta mais distante do Sol e possui ventos extremamente rápidos.",

        diametro: "49.244 km",
        distancia: "4,50 bilhões km",
        temperatura: "-200 °C",
        luas: "16",
        ano: "164,8 anos",
        dia: "16h 6min",

        curiosidade:
            "Netuno possui alguns dos ventos mais rápidos do Sistema Solar, que podem ultrapassar 2.000 km/h."
    }
};


// ======================================
// MOSTRAR PLANETA
// ======================================

function mostrarPlaneta(id) {

    const planeta = planetas[id];

    document.getElementById("planetName").textContent =
        planeta.nome;

    document.getElementById("planetDescription").textContent =
        planeta.descricao;

    document.getElementById("diameter").textContent =
        planeta.diametro;

    document.getElementById("distance").textContent =
        planeta.distancia;

    document.getElementById("temperature").textContent =
        planeta.temperatura;

    document.getElementById("moons").textContent =
        planeta.luas;

    document.getElementById("year").textContent =
        planeta.ano;

    document.getElementById("day").textContent =
        planeta.dia;

    document.getElementById("curiosity").textContent =
        planeta.curiosidade;


    // Cria o planeta grande no painel

    const planetImage =
        document.getElementById("planetImage");

    planetImage.innerHTML =
        `<div class="big-planet ${planeta.classe}"></div>`;


    // Abre o painel

    document
        .getElementById("infoPanel")
        .classList.add("active");

    document
        .getElementById("overlay")
        .classList.add("active");
}


// ======================================
// FECHAR PAINEL
// ======================================

function fecharPainel() {

    document
        .getElementById("infoPanel")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

    // Para a fala caso esteja acontecendo

    window.speechSynthesis.cancel();
}


// ======================================
// PAUSAR ANIMAÇÕES
// ======================================

let animacaoPausada = false;

function alternarAnimacao() {

    const orbitas =
        document.querySelectorAll(".orbit");

    const botao =
        document.getElementById("pauseBtn");

    animacaoPausada = !animacaoPausada;

    orbitas.forEach(orbita => {

        orbita.style.animationPlayState =
            animacaoPausada ? "paused" : "running";

    });

    if (animacaoPausada) {

        botao.textContent = "▶ Continuar";

    } else {

        botao.textContent = "⏸ Pausar";

    }
}


// ======================================
// LEITOR DE INFORMAÇÕES
// ======================================

function lerInformacoes() {

    const nome =
        document.getElementById("planetName").textContent;

    const descricao =
        document.getElementById("planetDescription").textContent;

    const curiosidade =
        document.getElementById("curiosity").textContent;

    const texto =
        `${nome}. ${descricao} Você sabia? ${curiosidade}`;

    window.speechSynthesis.cancel();

    const fala =
        new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 0.9;

    fala.pitch = 1;

    window.speechSynthesis.speak(fala);
}


// ======================================
// ESC PARA FECHAR
// ======================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharPainel();

    }

});
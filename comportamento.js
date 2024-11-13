function calcularTMB() {
    var peso = parseFloat(document.getElementById("peso").value);
    var idade = parseInt(document.getElementById("idade").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("seletor1").value;
    var nivelAtividade = parseFloat(document.getElementById("seletor2").value);

    var resultado = 0;
    if (sexo === "F") {
        resultado = 655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    } else if (sexo === "M") {
        resultado = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    }

    switch (nivelAtividade) {
        case 1:
            resultado *= 1.2;
            break;
        case 2:
            resultado *= 1.375;
            break;
        case 3:
            resultado *= 1.55;
            break;
        case 4:
            resultado *= 1.725;
            break;
    }

    document.getElementById("resultado").value = resultado.toFixed(2);
}

// Função para salvar rotina
function salvarRotina() {
    const rotina = document.getElementById("rotina").value;
    if (rotina) {
        let rotinasSalvas = JSON.parse(localStorage.getItem("rotinas")) || [];
        rotinasSalvas.push(rotina);
        localStorage.setItem("rotinas", JSON.stringify(rotinasSalvas));
        document.getElementById("rotina").value = ""; // Limpar o campo de entrada
        exibirRotinas();
    }
}

// Função para exibir rotinas salvas
function exibirRotinas() {
    const rotinas = JSON.parse(localStorage.getItem("rotinas")) || [];
    const listaRotinas = document.getElementById("lista-rotinas");
    listaRotinas.innerHTML = "";
    rotinas.forEach((rotina) => {
        const item = document.createElement("li");
        item.textContent = rotina;
        listaRotinas.appendChild(item);
    });
}

// Função para imprimir rotinas
function imprimirRotinas() {
    window.print();
}

// Exibir as rotinas ao carregar a página
window.onload = exibirRotinas;

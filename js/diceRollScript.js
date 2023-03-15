var quantidadeDados = 1;

function atualizarQuantidadeDados() {
    var quantidadeDadosElemento = document.getElementById("quantidadeDados");
    quantidadeDadosElemento.innerHTML = quantidadeDados;
}

var menosDados = document.getElementById("menosDados");
function menos() {
    if (quantidadeDados > 1) {
        quantidadeDados--;
        atualizarQuantidadeDados();
    }
};

var addDados = document.getElementById("addDados");
function mais() {
    quantidadeDados++;
    atualizarQuantidadeDados();
};


var modificadorDados = 0;

function atualizarMod() {
    var elementModificador = document.getElementById("modificador");
    elementModificador.innerHTML = modificadorDados;
}

var addMod = document.getElementById("menosModificador");
function menosMod() {
    modificadorDados--;
    atualizarMod();
};


function maisMod() {
    modificadorDados++;
    atualizarMod();
};

function rolarDados() {

    var numeroLados = 0;
    var inputNumeroLados = document.querySelector('input[name="numeroLados"]:checked');

    if (inputNumeroLados) {
        numeroLados = parseInt(inputNumeroLados.value);
    }

    var menorValor = quantidadeDados;
    var maiorValor = quantidadeDados * numeroLados;
    var resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;

    var resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = resultado + modificadorDados;

    return resultado;
}

var inputsRadioNumeroLados = document.getElementsByName("numeroLados");
for (var i = 0; i < inputsRadioNumeroLados.length; i++) {
    inputsRadioNumeroLados[i].addEventListener('change', function () {
        for (var j = 0; j < inputsRadioNumeroLados.length; j++) {
            if (inputsRadioNumeroLados[j].checked) {
                inputsRadioNumeroLados[j].parentNode.classList.add('selecionado');
            } else {
                inputsRadioNumeroLados[j].parentNode.classList.remove('selecionado');
            }
        }
    });
}





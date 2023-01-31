var conversaoMilhasQuilometros = 1.60934;
var conversaoMilhasAnosLuz = 0.00000000000017010799;

var conversaoQuilometrosMilhas = 0.621371;
var conversaoQuilometrosAnosLuz = 0.00000000000010569999;

var conversaoAnosLuzMilhas = 5878999999999.99;
var conversaoAnosLuzQuilometros = 9461000000000.00;

var valorEntrada = 0;
var valorSaída = 0;

function Converter() {
    valorEntrada = document.getElementById("valor-entrada").value;

    if (document.getElementById("select-1").value == ""){
        if (document.getElementById("select-2").value == ""){
            alert ("Por favor, selecione uma unidade de distância de entrada e uma de saída.");
            return
        } else {
            alert ("Por favor, selecione uma unidade de distância de entrada.");
            return
        }
    } else if (document.getElementById("select-2").value == ""){
        alert ("Por favor, selecione uma unidade de distância de saída.");
        return
    } else if (valorEntrada == ""){
        alert ("Por favor, insira a distância a ser convertida.")
        return
    }
    
    if (document.getElementById("select-1").value == "mi") {
        if (document.getElementById("select-2").value == "km"){
            valorSaída = valorEntrada * conversaoMilhasQuilometros;
        } else if (document.getElementById("select-2").value == "ly"){
            valorSaída = valorEntrada * conversaoMilhasAnosLuz;
        } else if (document.getElementById("select-2").value == "mi"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "km") {
        if (document.getElementById("select-2").value == "mi"){
            valorSaída = valorEntrada * conversaoQuilometrosMilhas;
        } else if (document.getElementById("select-2").value == "ly"){
            valorSaída = valorEntrada * conversaoQuilometrosAnosLuz;
        } else if (document.getElementById("select-2").value == "km"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "ly") {
        if (document.getElementById("select-2").value == "mi"){
            valorSaída = valorEntrada * conversaoAnosLuzMilhas;
        } else if (document.getElementById("select-2").value == "km"){
            valorSaída = valorEntrada * conversaoAnosLuzQuilometros;
        } else if (document.getElementById("select-2").value == "ly"){
            valorSaída = valorEntrada * 1;
        }
    }
        
    var valorConvertidoHTML = document.getElementById("valor-convertido");

    var valorConvertido;

    if (document.getElementById("select-2").value == "mi"){
        valorConvertido = `A distância entre as estrelas é de ${valorSaída} milhas.`
    } else if (document.getElementById("select-2").value == "km"){
        valorConvertido = `A distância entre as estrelas é de ${valorSaída} quilômetros.`
    } else if (document.getElementById("select-2").value == "ly"){
        valorConvertido = `A distância entre as estrelas é de ${valorSaída} anos-luz.`
    }

    valorConvertidoHTML.innerHTML = valorConvertido;
}
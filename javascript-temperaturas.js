var valorEntrada = 0;
var valorSaída = 0;

function Converter() {
    valorEntrada = document.getElementById("valor-entrada").value;

    if (document.getElementById("select-1").value == ""){
        if (document.getElementById("select-2").value == ""){
            alert ("Por favor, selecione uma unidade de temperatura de entrada e uma de saída.");
            return
        } else {
            alert ("Por favor, selecione uma unidade de temperatura de entrada.");
            return
        }
    } else if (document.getElementById("select-2").value == ""){
        alert ("Por favor, selecione uma unidade de temperatura de saída.");
        return
    } else if (valorEntrada == ""){
        alert ("Por favor, insira a temperatura a ser convertida.")
        return
    }
    
    if (document.getElementById("select-1").value == "C") {
        if (document.getElementById("select-2").value == "F"){
            valorSaída = (valorEntrada * 9/5) + 32;
        } else if (document.getElementById("select-2").value == "K"){
            valorSaída = (valorEntrada * 1) + 273.15;
        } else if (document.getElementById("select-2").value == "C"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "F") {
        if (document.getElementById("select-2").value == "C"){
            valorSaída = (valorEntrada - 32) * 5/9;
        } else if (document.getElementById("select-2").value == "K"){
            valorSaída = ((valorEntrada - 32) * 5/9) + 273.15;
        } else if (document.getElementById("select-2").value == "F"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "K") {
        if (document.getElementById("select-2").value == "C"){
            valorSaída = valorEntrada - 273.15;
        } else if (document.getElementById("select-2").value == "F"){
            valorSaída = ((valorEntrada - 273.15) * 9/5) + 32;
        } else if (document.getElementById("select-2").value == "K"){
            valorSaída = valorEntrada * 1;
        }
    }

    valorSaída = new Intl.NumberFormat("pt-br").format(valorSaída);
    
    var valorConvertidoHTML = document.getElementById("valor-convertido");

    var valorConvertido;

    if (document.getElementById("select-2").value == "C"){
        valorConvertido = `A temperatura em Celsius é de ${valorSaída} °C.`
    } else if (document.getElementById("select-2").value == "F"){
        valorConvertido = `A temperatura em Fahrenheit é de ${valorSaída} °F.`
    } else if (document.getElementById("select-2").value == "K"){
        valorConvertido = `A temperatura em Kelvin é de ${valorSaída} K.`
    }

    valorConvertidoHTML.innerHTML = valorConvertido;
}
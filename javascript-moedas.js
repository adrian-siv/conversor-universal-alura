var cotacaoRealDolar = 0.2;
var cotacaoRealEuro = 0.18;
var cotacaoRealYuan = 1.32;

var cotacaoDolarReal = 5.21;
var cotacaoDolarEuro = 0.92;
var cotacaoDolarYuan = 6.75;

var cotacaoEuroReal = 5.56;
var cotacaoEuroDolar = 1.09;
var cotacaoEuroYuan = 7.33;

var cotacaoYuanReal = 0.76;
var cotacaoYuanDolar = 0.15;
var cotacaoYuanEuro = 0.14;

var valorEntrada = 0;
var valorSaída = 0;

function Converter() {
    valorEntrada = document.getElementById("valor-entrada").value;
     
    if (document.getElementById("select-1").value == ""){
        if (document.getElementById("select-2").value == ""){
            alert ("Por favor, selecione uma moeda de entrada e uma de saída.");
            return
        } else {
            alert ("Por favor, selecione uma moeda de entrada.");
            return
        }
    } else if (document.getElementById("select-2").value == ""){
        alert ("Por favor, selecione uma moeda de saída.");
        return
    }
    
    if (document.getElementById("select-1").value == "real") {
        if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * cotacaoRealDolar;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * cotacaoRealEuro;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * cotacaoRealYuan;
        } else if (document.getElementById("select-2").value == "real"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "dolar") {
        if (document.getElementById("select-2").value == "real"){
            valorSaída = valorEntrada * cotacaoDolarReal;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * cotacaoDolarEuro;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * cotacaoDolarYuan;
        } else if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "euro") {
        if (document.getElementById("select-2").value == "real"){
            valorSaída = valorEntrada * cotacaoEuroReal;
        } else if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * cotacaoEuroDolar;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * cotacaoEuroYuan;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "yuan") {
        if (document.getElementById("select-2").value == "real"){
            valorSaída = valorEntrada * cotacaoYuanReal;
        } else if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * cotacaoYuanDolar;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * cotacaoYuanEuro;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * 1;
        }
    }

    valorSaída = valorSaída.toFixed(2);

    var valorConvertidoHTML = document.getElementById("valor-convertido");

    var valorConvertido;

    if (document.getElementById("select-2").value == "real"){
        valorConvertido = `O valor convertido é R$ ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "dolar"){
        valorConvertido = `O valor convertido é $ ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "euro"){
        valorConvertido = `O valor convertido é € ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "yuan"){
        valorConvertido = `O valor convertido é ¥ ${valorSaída}.`
    }

    valorConvertidoHTML.innerHTML = valorConvertido;
}
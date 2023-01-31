var cotacaoRealDolar = 0.2;
var cotacaoRealEuro = 0.18;
var cotacaoRealYuan = 1.32;
var cotacaoRealBitcoin = 0.0000086;

var cotacaoDolarReal = 5.21;
var cotacaoDolarEuro = 0.92;
var cotacaoDolarYuan = 6.75;
var cotacaoDolarBitcoin = 0.000044;

var cotacaoEuroReal = 5.56;
var cotacaoEuroDolar = 1.09;
var cotacaoEuroYuan = 7.33;
var cotacaoEuroBitcoin = 0.000048;

var cotacaoYuanReal = 0.76;
var cotacaoYuanDolar = 0.15;
var cotacaoYuanEuro = 0.14;
var cotacaoYuanBitcoin = 0.0000065;

var cotacaoBitcoinReal = 116648.25;
var cotacaoBitcoinDolar = 22298.00;
var cotacaoBitcoinEuro = 21027.14;
var cotacaoBitcoinYuan = 154018.41;

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
    } else if (valorEntrada == ""){
        alert ("Por favor, insira o valor a ser convertido.")
        return
    }
    
    if (document.getElementById("select-1").value == "real") {
        if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * cotacaoRealDolar;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * cotacaoRealEuro;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * cotacaoRealYuan;
        } else if (document.getElementById("select-2").value == "bitcoin"){
            valorSaída = valorEntrada * cotacaoRealBitcoin;
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
        } else if (document.getElementById("select-2").value == "bitcoin"){
            valorSaída = valorEntrada * cotacaoDolarBitcoin;
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
        } else if (document.getElementById("select-2").value == "bitcoin"){
            valorSaída = valorEntrada * cotacaoEuroBitcoin;
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
        } else if (document.getElementById("select-2").value == "bitcoin"){
            valorSaída = valorEntrada * cotacaoYuanBitcoin;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * 1;
        }
    }

    if (document.getElementById("select-1").value == "bitcoin") {
        if (document.getElementById("select-2").value == "real"){
            valorSaída = valorEntrada * cotacaoBitcoinReal;
        } else if (document.getElementById("select-2").value == "dolar"){
            valorSaída = valorEntrada * cotacaoBitcoinDolar;
        } else if (document.getElementById("select-2").value == "euro"){
            valorSaída = valorEntrada * cotacaoBitcoinEuro;
        } else if (document.getElementById("select-2").value == "yuan"){
            valorSaída = valorEntrada * cotacaoBitcoinYuan;
        } else if (document.getElementById("select-2").value == "bitcoin"){
            valorSaída = valorEntrada * 1;
        }
    }
   
   if (document.getElementById("select-2").value != "bitcoin"){
       valorSaída = valorSaída.toFixed(2);
   }

    var valorConvertidoHTML = document.getElementById("valor-convertido");

    var valorConvertido;

    if (document.getElementById("select-2").value == "real"){
        valorSaída = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL' }).format(valorSaída);
        valorConvertido = `O valor convertido em real é ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "dolar"){
        valorSaída = new Intl.NumberFormat("en-us", {style: 'currency', currency: 'USD' }).format(valorSaída);
        valorConvertido = `O valor convertido em dólar é ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "euro"){
        valorSaída = new Intl.NumberFormat("es-ES", {style: 'currency', currency: 'EUR' }).format(valorSaída);
        valorConvertido = `O valor convertido em euro é ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "yuan"){
        valorSaída = new Intl.NumberFormat("en-us", {style: 'currency', currency: 'CNY' }).format(valorSaída);
        valorConvertido = `O valor convertido em yuan é ${valorSaída}.`
    } else if (document.getElementById("select-2").value == "bitcoin"){
        valorConvertido = `O valor convertido em Bitcoin é ฿ ${valorSaída}.`
    }

    valorConvertidoHTML.innerHTML = valorConvertido;
}
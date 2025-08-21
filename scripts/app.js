const escolha_converter = document.querySelector("#converterEscolha")
const escolha_convertido = document.querySelector("#resultadoEscolha")
const resultado = document.querySelector(".valorConvertido")
const valor_converter = document.querySelector(".valorConverter")
const botao = document.querySelector("#botao")
const aviso = document.querySelector(".aviso")


function usdBrl(valor){
    return (valor*5.48);
}

function brlUsd(valor){
    return (valor/5.48);
}

function brlEur(valor){
    return (valor/6.38);
}

function eurBrl(valor){
    return (valor*6.38);
}

function eurUsd(valor){
    return (valor*1.16);
}

function usdEur(valor){
    return (valor*0.86);
}




function converter(){
    aviso.textContent = "";
    if(escolha_converter.value === "usd" && escolha_convertido.value === "brl"){
        let aux = usdBrl(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "brl" && escolha_convertido.value === "usd"){
        let aux = brlUsd(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "brl" && escolha_convertido.value === "eur"){
        let aux = brlEur(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "eur" && escolha_convertido.value === "brl"){
        let aux = eurBrl(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "eur" && escolha_convertido.value === "usd"){
        let aux = eurUsd(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "usd" && escolha_convertido.value === "eur"){
        let aux = usdEur(valor_converter.value);
        resultado.value = aux.toFixed(2);
    }

    if(escolha_converter.value === "usd" && escolha_convertido.value === "usd"){
        aviso.textContent = "Você não pode converter a mesma moeda!";
    }

    if(escolha_converter.value === "brl" && escolha_convertido.value === "brl"){
        aviso.textContent = "Você não pode converter a mesma moeda!";
    }

    if(escolha_converter.value === "eur" && escolha_convertido.value === "eur"){
        aviso.textContent = "Você não pode converter a mesma moeda!";
    }
}

botao.addEventListener("click", () =>{
    converter();
});

valor_converter.value = 1;

converter();
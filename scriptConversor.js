const valoresConversao = {
    real: {
        euro: 0.19,
        dolar: 0.20
    },
    dolar:{
        real: 4.99,
        euro: 0.92
    },
    euro: {
        real:5.40,
        dolar:1.08
    }   

}

function converter() {
        let valorUsuario = document.getElementById("valorEntrada").value;

        let moeda1 = document.getElementById("moeda1").value;
        let moeda2 = document.getElementById("moeda2").value;
        
        if(moeda1 == moeda2) {
            alert("As moedas são iguais!!!")
            return;

        }

        let resultado = valorUsuario * valoresConversao[moeda1][moeda2];
    
        let paragrafoResultado = document.getElementById("resultado");
        paragrafoResultado.textContent = resultado;
    
}

function limpar() {
    paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.textContent = "";

    valorEntrada = document.getElementById("resultado")
    valorEntrada.value = "";
}

function inverter() {
   let valorMoeda1 = document.getElementById("moeda1").value;
   let valorMoeda2 = document.getElementById("moeda2").value;

   document.getElementById("moeda1").value = valorMoeda2
   document.getElementById("moeda2").value = valorMoeda1
}
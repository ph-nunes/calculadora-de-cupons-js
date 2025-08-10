# calculadora-de-cupons-js
Um simulador de cupons de desconto em JavaScript para calcular o valor final de uma compra.

# Simulador de Desconto com Cupons em JavaScript
Este projeto é um simulador simples para aplicar descontos em uma compra usando cupons. Desenvolvido em JavaScript puro, ele demonstra o uso de funções, variáveis e estruturas condicionais (if/else if/else ou switch/case) de forma clara e organizada.

# Funcionalidades
Simula a aplicação de cupons de 10% e 20%;
Trata cupons inválidos ou inexistentes;
Calcula o valor final da compra após o desconto;
Código modular com funções dedicadas para cada tarefa.

# Como usar
clonar o repositório e abrir o arquivo JavaScript para visualizar a lógica. Você pode modificar a variável "cupomAplicado" para testar diferentes cenários.
```javascript
let cupomAplicado = 'CUPOM_INVALIDO'; // Altere para 'CUPOM10' ou 'CUPOM20'
````
# Tecnologias
JavaScript

# Código
````
const DESCONTO10 = 0.10
const DESCONTO20 = 0.20
const valorDaCompra = 215

let cupomAplicado = "CUPOM20"

const valorDesconto = calcularDesconto(valorDaCompra, cupomAplicado)

const valorFinal = calcularValorFinal(valorDaCompra, valorDesconto)

console.log(`valor da compra: R$ ${valorDaCompra.toFixed(2)}`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`)


function calcularDesconto(valorDaCompra, cupom){
    if (cupom === "CUPOM10"){
         return valorDaCompra * DESCONTO10
         
    } else if (cupom === "CUPOM20"){
        return valorDaCompra * DESCONTO20
    } else {
        return 0
    }
}

function calcularValorFinal(){
   return valorDaCompra - valorDesconto
}


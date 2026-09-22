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

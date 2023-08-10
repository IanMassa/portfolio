function Conversor() {
    
    resultado = (idade * 365)
    return resultado
}

const idade = (10) //Insira a Idade aqui

if (idade > 0){
    console.log("Você tem "+Conversor()+" dias de idade")
} else {
    console.log("Erro! Idade devem ser positivas")
}

function comparador(num1, num2){
    if (num1 >= num2){
        return true;
    } else {
        return false;
    }
}
const resultado = comparador(5, 3);
if (resultado == true){
    console.log("o primeiro número é o maior");
} else {
    console.log("o segundo número é maior");
}



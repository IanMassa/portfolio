function calcularSoma(arr) {
    let soma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
  
    return soma;
  }
  const numeros = [2, 4, 6, 8, 10];
  const somaTotal = calcularSoma(numeros);
  console.log(somaTotal);  
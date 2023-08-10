function encontrarSegundoMaior(arr) {
    if (arr.length < 2) {
      throw new Error('O array deve ter pelo menos dois elementos');
    }
    
    const numerosOrdenados = arr.sort((a, b) => b - a);
    
    const segundoMaior = numerosOrdenados[1];
    
    return segundoMaior;
  }
  const numeros = [8, 4, 10, 6, 2];
try {
  const segundoMaior = encontrarSegundoMaior(numeros);
  console.log(segundoMaior); 
} catch (error) {
  console.error(error.message);
}
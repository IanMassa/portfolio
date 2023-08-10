function filtro(arr) {
    const numeros = arr.filter((elemento) => typeof elemento === 'number');
    
    return numeros;
  }

  const resultado1 = filtro(["Js", 2, "hoje", 4, 5, 7, "teste"]);
console.log(resultado1); 

const resultado2 = filtro(["teste", "tentativa"]);
console.log(resultado2); 
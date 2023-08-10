function repetir(elemento, quantidade) {
    var arrayResultado = [];
    
    for (var i = 0; i < quantidade; i++) {
      arrayResultado.push(elemento);
    }
    
    return arrayResultado;
  }
  
  console.log(repetir("teste", 2))
  console.log(repetir(4, 3))
   
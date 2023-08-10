function invertValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return "Boolean ou número esperados, mas o tipo é " + typeof parametro;
    }
  }
console.log(invertValor(true)); //insira aq a informação/número desejado
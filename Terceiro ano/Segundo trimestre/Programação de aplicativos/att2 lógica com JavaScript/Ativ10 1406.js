function melhoresAlunos(estudantes) {
    let melhorMedia = 0;
    let melhorAluno = '';
  
    for (const aluno in estudantes) {
      const notas = estudantes[aluno];
      let somaNotas = 0;
  
      for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
      }
  
      const media = somaNotas / notas.length;
  
      if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
  
    return { nome: melhorAluno, media: melhorMedia };
  }
  const estudantes = {
    Augusto: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
  };
  
  const melhorAluno = melhoresAlunos(estudantes);
  console.log(melhorAluno); 
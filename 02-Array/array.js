// Criando um array (ou vetor)
let alunos = ["Inacinho", "Verônica", "Antônico"];

// Exibindo a estrutura de dados do array
console.log(alunos);

// Acessando os dados do array através de índice
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// O aluno  NOME é sem sombra de dúvidas o melhor desta sala.
console.log(
    `O aluno ${alunos[2]} é sem sombra de dúvidas o melhor desta sala.`
);


// Array como matriz (array bidimensional)
let tecnologias = [
    
    // 0       1    2
    ['html', 'css', 'js'],  // 0
    

    // 0    1           2       3       4
    ['php', 'mysql', 'nodejs', 'java', 'python'] // 1

];

// Exibir nodejs no console
console.log(tecnologias);
console.log(tecnologias[1][2]); // nodejs
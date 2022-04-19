// comentário de uma linha - atalho CTRL ;
/* bloco de 
comentário - atalho SHIFT ALT A */


// Comando de saída para o console
console.log("Olá, mundo!");


/* Variáveis e Constantes 
Palavras-chave: var, let, const 

var -> variável de escopo global
let -> variável de escopo de bloco
const -> const de escopo de bloco */

const nome = "Klaibert"; // constante
let ano = 2022; // variável escopo local
var curso = "Técnico em Informática para Internet"; // variável global

/*
ano = 2025;
curso = "Como se tornar uma princesa";
nome = "Inacinho";
*/

// recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);

// concatenação
// Eu sou o(a) XXXXXX e em ANO estou estudando no curso CURSO.
console.log("Eu sou o " +nome+ " e em " +ano+ " estou estudando no curso " +curso+ ".");

//Template String
console.log(`Eu sou o ${nome} e em ${ano} estou estudando no curso ${curso}`);



/* Operadores matemáticos:
+   adição
-   subtração
/   divisão
*   multiplicação */

let produto = "TV Led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;


/* Exercício: usando console.log mostre a seguinte mensagem
Temos atualmente no estoque o produto TV Led na quantidade de 3 unidades, ao custo de 6500 (cada) e valor total de XXXX. */
console.log(
    `Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco} (cada) e valor total de ${total}.`
);

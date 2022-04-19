/* Estruturas de Controle Condicional */

/* if/else, else if */
let nome = "Klaibert";
let idade = 17;

// Verificar a idade da pessoa

// Condicional Encadeada
let mensagem;

/*
if (idade > 18) {
    mensagem = "Você é maior de idade";
} else {
    mensagem = "Você é menor de idade";
}
// document.write(mensagem);
console.log(mensagem);
*/

if (idade >= 60) {
    mensagem = 'É idoso(a)';
} else if (idade >= 18) {
    mensagem = 'É adulto, mas não idoso(a)';
} else {
    // mensagem = 'É menor de idade';

    // condional aninhada
    if (idade >= 12 && idade < 18) {
        mensagem = 'É adolescente';
    } else {
        mensagem = 'É baby shark';
    }
}

console.log(`${nome}, ${mensagem}`);
console.log("----------------");


/* Exercícios:
1) Crie duas variáveis conforme a seguir:
nota 1 (valendo um valor de 0 a 10)
nota 2 (valendo um valor de 0 a 10) 

2) Crie uma variável para receber o cálculo da
média das duas notas informadas

3) Programe uma condicional que verifique o valor da média. Se for maior/igual a 7, mostre 'aprovado'.
Caso contrário, 'reprovado'. */


let nota1 = 2.9;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
console.log(media);
let resultado;

// if/else tradicional
/* if( media >= 7){
    resultado = 'aprovado';
} else {
    resultado = 'reprovado';
}*/

// if/else (shorthand if/else - operador ternário ?:)
// media>=7 ? resultado = "Aprovado" : resultado = "Reprovado";

resultado = media>=7 ? 'aprovado' : 'reprovado';
console.log(resultado);


console.log('---------');


/* switch/case/default/break */
/* Opções do chatbot: 
1   ->  informações
2   ->  reclamação
3   ->  dúvidas
x   ->  opção desconhecida, direcionar para um humano */

let opcao = 1;
let textoOpcao;


switch(opcao) {
    case 1: 
        textoOpcao = 'Legal, o que deseja saber?';
        break;
    
    case 2:
        textoOpcao = 'Que pena, o que aconteceu?';
        break;

    case 3:
        textoOpcao = 'Certo, qual sua dúvida?';
        break;

    default:
        textoOpcao = 'Hum, não entendi... vou te transferir.';
        break;
}

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);


/* Operadores de comparação */
let a = 10;
let b = "10";

console.log('---------');
console.log(a === b); // true ou false

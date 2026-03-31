//Exercicio 1
// Objetivo: Criar um array de nomes e exibi-los no console usando um loop for.
console.log("Exercicio 1")
const nomes = ["City", "Kim", "Breno", "Pitoco", "Rafael", "Leo", "Pina"];
for (let i = 0; i < nomes.length; i++){
    console.log("Nome: " + nomes[i]);
    if (nomes[i][0] === "C"){
        console.log("O nome " + nomes[i] + " começa com a letra C.");
    }
}
console.log("Total de nomes: " + nomes.length);
console.log("Fim do exercício 1.");

//Exercicio 2
// Objetivo: Praticar os métodos push, pop, shift, unshift e splice.
console.log("Exercicio 2")
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.push("Uva");
console.log(frutas);
const removida = frutas.pop();
console.log("Fruta removida: " + removida);

frutas.unshift("Abacate");
frutas.shift();
frutas.splice(1, 0, 'Abacaxi');
console.log(frutas);

//Exercicio 3
// Objetivo: Utilizar os métodos funcionais mais importantes do JavaScript moderno.
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n*2);
console.log(dobrados);

// Converter para string
const string = numeros.map(n => `Número: ${n}`);
console.log(string);

const idades = [18, 19, 15, 10, 20, 2];
const adultos = idades.filter(idade => {
    return idade >= 18
}).map(idade => {
    return idade * 2
});
console.log(adultos);
/*for (idade of idades){
    if (idade >= 18){
        console.log(idade);
    }
} */

// Numeros pares
const pares = numeros.filter(n=>{
   return n % 2 === 0
});
console.log(pares);

const precos = [10.5, 25.0, 8.75, 30.0];
const total = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log(`Valor total: ${total}`);

//Exercicio 4
// Objetivo: Ordenar arrays e buscar elementos com sort, find e findIndex.
const alunos = [
    {nome: "Joao", nota: 7.5},
    {nome: "Maria", nota: 9.0},
    {nome: "Pedro", nota: 6.0},
    {nome: "Lucia", nota: 8.5}
];
alunos.sort((a,b) => a.nota - b.nota);
console.log(alunos);

const aprovado = alunos.find(a => {
    return a.nota >= 8.0
});
console.log(`Aprovado com distinção: ${aprovado.nome}`);

const indice = alunos.findIndex(a =>{
    return a.nome === "Maria"
});
console.log(`Maria está na posição no index: ${indice}`);

//Exercicio 5
// Objetivo: Trabalhar com arrays dentro de arrays para representar uma matriz ou tabela.
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][2]);

for (let linha = 0; linha < matriz.length; linha++){
    for(let col = 0; col < matriz[linha].length; col++){
        process.stdout.write(matriz[linha][col] + ' ');
    }
    console.log();
}
const tarefas = [
 {
 'nome' : 'estudar Javascript',
 'duracao' : 150
 },
 {
 'nome' : 'correr',
 'duracao' : 60
 },
 {
 'nome' : 'netflix',
 'duracao' : 120
 }
];

let maiorQue1Hora = tarefas.filter(x => x.duracao >60)
console.log(maiorQue1Hora)

let tarefaDobro = tarefas.map(x => x.duracao * 2)
console.log(tarefaDobro)

let imprimir = tarefas.forEach(x => console.log(x))

let soma = tarefas.reduce((acc,x) => acc+x.duracao,0)
console.log(soma)

let maiorque1=[]
maiorque1.push(tarefas.forEach(y => y.duracao > 60)) // DEU ERRADo

console.log(maiorque1)



/*
1) Crie uma matriz com as tarefas que
duram mais de 1 hora
2) Cria uma nova matriz onde as durações
são dobradas
3) Imprima o nome e duração das tarefas
ao lado
4) Calcule a soma das durações da matriz
ao lado
5) implemente a questão 1 usando forEach */

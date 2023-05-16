
function maiorQueDez(element, index, array) { // FUNÇÃO CALLBACK
 return element >= 10; // Todos os elementos precisam ser maiores ou iguais a dez
}
let number = [1, 5, 8, 7, 38]
console.log(number.every(maiorQueDez)) // false (todos são menores que 10)
let number2 = [1, 54, 18, 130, 44]
console.log(number2.every(maiorQueDez)) // false (tem um menor que 10)


// 

number.every(x => x > 5)// false, tem elemento menor ou igual a cinco
number.some(x => x > 5)//true, tem pelo menos um maior que 5

function checaSeEuGostei(number) {
 return number >= 18;
}

number.find(checaSeEuGostei)// primeiro elemento maior ou igual a 18

console.log(number.includes(38))//true, possui 38



// OUTRA AO MAP,FILTER,FOR EACH, REDUCE

let GolsF = [2,0,3,1,0,2,3,2]
let GolsF_dobro= GolsF.map(x => 2*x)//array dobrada
console.log(GolsF_dobro)
let GolsF22 = GolsF_dobro.filter(x => x>1)// filtra elementos maiores que 1
console.log(GolsF22)



// FOR EACH DOBRANDO

GolsF.forEach(x=>console.log(2*x))// forEach imprime, pois não retorna nada

let soma = GolsF.reduce((acc,x) => acc+x) //acc é acumulador. acumulador inicialmente é igual a zero(vai Somando)
console.log("Soma do número de gols do fortaleza: "+ soma)

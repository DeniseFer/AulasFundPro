let nomes=[ "Zé", "Téo", "Ana", "Bia"]

// CONCAT()
// une elementos aos da array antiga
var resultado=nomes.concat("Maria")
//resultado=[ "Zé", "Téo", "Ana", "Bia", “Maria”]
resultado=nomes.concat([1,2,3], "Léo");
//resultado=[ "Zé", "Téo", "Ana", "Bia", 1,2,3, “Léo”]

// SLICE()
// cria uma arrray com pedaços da original
let aprovados=nomes.slice(1,2)
//notar que nomes não foi alterado

// JOIN()
// adiciona traço
let velho = [1, 2, 3, 4, 5, 6, 7]
velho.join("-")
let novo = velho.concat([8, 9, 10])
console.log(novo)

//indexOf

let frutas=["Uva", "Maçã", "Pera", "Uva"]
var str=frutas.join("-") //”Uva-Maçã-Pera-Uva”
str=frutas.join("<3") //”UvaMaçãPeraUva”
console.log(str)
var pos=frutas.indexOf("Uva") // indice do elemento
var ultima = frutas.lastIndexOf("Uva") // ultimo indice 
console.log(ultima)

// EXERCÍCIOS

let frutas=["uva","maçã","pera","uva"]
console.log(frutas.join("+"))

let nomes=["Zé", "Téo", "Ana", "Bia"]

let array2 = nomes.concat(frutas)
console.log(array2)

// SLICE SEM PARÂMETRO CLONA ARRAY
let copia = frutas.slice()
console.log(copia)

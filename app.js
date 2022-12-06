/*
let numero = "1"
let uno = 1
let unoParseado = uno.toString()

console.log(typeof numero)
console.log(typeof unoParseado)


if(numero === unoParseado){
    console.log("Es el numero 1 ")
}else{
    console.log("NO Es el numero 1 ")
}
*/



/*
// Valores FALSY:
let numero
console.log(numero)

let numero2 = ""
console.log(numero2)

let numero3 = null
console.log(numero3)

let umero4 = "a"
let numero4 = parseInt(umero4)
console.log(numero4)

let numero5 = false
console.log(numero5)

let numero6 = 0
console.log(numero6)

// Son TRUTHY todos aquellos valores que NO son FALSY
// Estoy validando si es un numero:
if(numero4){
    console.log("Es válido")
}else{
    console.log("No es valido")
}
*/


/*
let valor1=9, valor2=6;
let letra = "s"

if(valor1 > valor2 && letra === "m"){
    console.log("El valor1 es mayor al valor2")
}else{
    console.log("El valor2 es mayor al valor1")
}

// Tablas de verdad
AND     &&     
In1    In2     Out
false  false   false
false  true    false
true   false   false
true   true    true
*/
/*
// YO SE QUE: 
let numero5 = false
console.log(numero5)
if(numero5){
    console.log("Es valido")
}else{
    console.log("NO Es valido")
}
// Son TRUTHY todos aquellos valores que NO son FALSY

numero6 = true 
console.log(numero6)
if(numero6){
    console.log("Es valido")
}else{
    console.log("NO Es valido")
}


let valor1=9, valor2=6;
let letra = "s"

if((valor1 > valor2) && (letra === "m")){
    console.log("El valor1 es mayor al valor2")
}else{
    console.log("El valor2 es mayor al valor1")
}
*/

/*
// Tabla de verdad: 
OR     ||       
In1    In2     Out
false  false   false
false  true    true
true   false   true
true   true    true

let valor1=9, valor2=36;
let letra = "s"

if((valor1 > valor2) || (letra === "m")){
    console.log("Es valido")
}else{
    console.log("NO Es valido") 
}
*/

/*
// Tabla de verdad NOT
let valor = false

console.log(valor)
console.log(!valor)

if(!valor){
    console.log("Es valido")
}else{
    console.log("NO Es valido")

}
*/
let valor = true
let valor2 = 7

console.log(valor2 && valor)

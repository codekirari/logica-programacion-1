// Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.

let n1 = Number(prompt("Ingrese el primer número:"));
let n2 = Number(prompt("Ingrese el segundo número:"));
let n3 = Number(prompt("Ingrese el tercer número:"));

//DOM

const outputMayor = document.getElementById("resultadoMayor");
const outputMenor = document.getElementById("resultadoMenor");

// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.

if(n1 === n2 && n2 === n3){
    outputMayor.textContent = `Los tres números son iguales: ${n1}, ${n2}, ${n3}`;
    outputMenor.textContent = ""; // Limpiamos el segundo contenedor
}else{

    let mayor;
    let medio;
    let menor;

    // mayor
    if(n1 >= n2 && n1 >= n3) mayor = n1;
    else if(n2 >= n1 && n2 >= n3) mayor = n2;
    else mayor = n3;

    // menor
    if(n1 <= n2 && n1 <= n3) menor = n1;
    else if(n2 <= n1 && n2 <= n3) menor = n2;
    else menor = n3;

    // centro
    medio = (n1 + n2 + n3) - mayor - menor;


// Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.

// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.

outputMayor.textContent = `Orden de Mayor a Menor: ${mayor}, ${medio}, ${menor}`;
    outputMenor.textContent = `Orden de Menor a Mayor: ${menor}, ${medio}, ${mayor}`;
}
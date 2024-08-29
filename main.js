//1.Introduccion a JavaScript

/*
Ejercicio 1: Generar un proyecto de vite para javascript vanilla, preparar el entorno para trabajar en el index y el 
main.js(no debe tener el mismo nombre de carpetas pero si estar en este entorno de desarrollo)
*/

/* Ejercicio 2:
Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. 
Imprime el resultado en la consola.
*/

/*
let a = 3;
let b = 4;
let c = a + b;

console.log("La suma de a y b es: " + c);
*/

/*
Ejercicio 3:
Escribe un programa que pida al usuario su nombre y lo almacene en una variable. Luego, imprime un saludo en la consola que incluya el 
nombre del usuario.
*/

/*
let nombre = prompt("¿Cual es tu nombre?");
console.log("Hola, " + nombre);
*/

//2.Operadores logicos y condicionales
/*
Ejercicio 1:
Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado 
en la consola.
*/

/*
let a = 3;
let b = 4;
let c = 5;

if (a > b && a > c){
  console.log("El mayor de los tres numeros es: " + a);
}else if(b > c){
  console.log("El mayor de los tres numeros es: " + b);
}else{
  console.log("El mayor de los tres numeros es: " + c);
}
*/

/*
Ejercicio 2:
Crea un programa que pida al usuario un número y determine si es par o impar.
Requisitos:  utilice la instrucción propmt  si es par, debe mostrar "El número (numeroIngresado) es par", y si es impar, 
"El número  (numeroIngresado) es impar".
*/

/*
let number = prompt("Ingrese un numero para saber si es par o impar"); 

if (number % 2 == 0){
  console.log("El numero " + number + ", es par");
}else{
  console.log("El numero " + number + ", es impar");
}
*/

//3.Operadores de asignacion y bucles

/*
Ejercicio 1:
Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración 
hasta que la variable sea igual a 0. Imprime el valor de la variable en cada iteración.
*/

/*
let variable = 10;

while(variable != 0){
  console.log(variable);
  variable--;
}
*/

/*
Ejercicio 2:
Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. 
El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100.
*/

/*
let number;

do{
  number = prompt("Ingresa un numero mayor a 100:");
}while(number <= 100)

console.log("Ingresaste un numero mayor a 100: " + number);
*/

//Funciones de JavaScript

/*
Ejercicio 1:
Escribe una función llamada esPar que reciba un número como parámetro y retorne true si el número es par y false 
si es impar. Prueba la función con diferentes números.
*/

/*
let number = prompt("Ingresa un numero");

const esPar = (number)=>{
  if (number % 2 === 0){
    return true;
  }else{
    return false;
  }
}

if (number % 2 === 0){
  console.log("El numero " + number + " es par: " + esPar(number));
}else{
  console.log("El numero " + number + " es impar: " + esPar(number));
}
*/

/*
Ejercicio 2:
Crea una función llamada convertirCelsiusAFahrenheit que reciba un valor en grados Celsius y lo convierta a Fahrenheit. 
La fórmula es F = C × 1.8 + 32. Muestra el resultado en la consola.
*/

/*
let temperature = prompt("Ingresa un valor de temperatura en Celsius:")

const convertirCelsiusAFarenheit = (temperature)=>{
  const temperatureFarenheit = temperature * 1.8 + 32;
  console.log(temperature + "ªC son equivalentes a " + temperatureFarenheit + "ªF");
}

convertirCelsiusAFarenheit(30);
*/

//5.Objetos en JavaScript

/*
Ejercicio 1:
Define un objeto persona con las propiedades nombre, edad, y ciudad. Luego, agrega un método que permita cambiar la 
ciudad de la persona. Usa el método para actualizar la ciudad y muestra las propiedades actualizadas en la consola.
*/

/*
let persona = {
  nombre:'Juan',
  edad: 24,
  ciudad: 'Mendoza',
  cambiarCiudad: function (ciudadNueva) {
      this.ciudad = ciudadNueva;
  }
};

persona.cambiarCiudad("Buenos Aires");

console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);
*/

/*
Ejercicio 2:
Crea un objeto libro con propiedades titulo, autor, y año. Luego, escribe un método que determine si el libro 
tiene más de 10 años desde su publicación. Muestra un mensaje en la consola indicando si el libro es 
antiguo o reciente.
*/

/*
let libro = {
  titulo: 'Harry Potter y la piedra filosofal',
  autor: 'J.K Rowling',
  year: 1997,
  masDeDiez : function (actualYear) {
    if (actualYear - this.year > 10){
      console.log("El libro " + this.titulo + " es antiguo");
    }else{
      console.log("El libro " + this.titulo + " no es antiguo");
    }
  }
};

libro.masDeDiez(2000);
*/

//6.ARRAYS

/*
Ejercicio 1:
Declara un array llamado numeros con los números del 1 al 10. Escribe un bucle que multiplique cada número por 2 y 
almacene los resultados en un nuevo array. Muestra el array original y el nuevo array en la consola.
*/

/*
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log("Numeros originales: " + numeros);

for (let i = 0; i < 10; i++){
  numeros[i] *= 2;
}

console.log("Numeros multiplicados por 2: " + numeros);
*/

/*
Ejercicio 2:
Crea un array vacío llamado pares. Escribe un bucle for que itere hasta 20 y que agregue los primeros 10 números 
pares al array. Al final, imprime el array pares en la consola.
*/

/*
let pares = [];

for (let i = 1; i <= 20; i++){
  if (i % 2 === 0){
    pares.push(i);
  }
}

console.log("Primeros 10 numeros pares: " + pares) 
*/

//1.Introduccion al DOM

/*
Ejercicio 1:
En el html muestra tres elementos de tipo <p> y haz un botón que dispara una función y nos permita cambiar todos 
nuestros elementos de tipo p en nuestra pagina de color azul
*/

/*
const buttonParagraphs = document.getElementById('buttonParrafos');
const paragraph1 = document.getElementById('parrafo1');
const paragraph2 = document.getElementById('parrafo2');
const paragraph3 = document.getElementById('parrafo3');

const handleStyleParagraphs = () => {
  if(paragraph1.classList.contains('blue__paragraph')){ 
    paragraph1.classList.remove('blue__paragraph');
    paragraph2.classList.remove('blue__paragraph');
    paragraph3.classList.remove('blue__paragraph');
  }else{
    paragraph1.classList.add('blue__paragraph');
    paragraph2.classList.add('blue__paragraph');
    paragraph3.classList.add('blue__paragraph');
  }
}

buttonParagraphs.addEventListener('click',()=>{
  handleStyleParagraphs();

})
*/

/*
Ejercicio 2:
Crea un formulario simple con un campo de texto y un botón. Escribe un script en JavaScript que muestre una alerta con el valor ingresado en el campo de texto cuando el usuario haga clic en el botón.
*/

/*
const buttonAlert = document.getElementById('alertaBoton');

const messageAlert = () =>{
  const valueText = document.getElementById('textFormulario').value;
  alert("Has ingresado: " + valueText);
};

buttonAlert.addEventListener('click',() => {
  messageAlert();
});
*/

//8.Eventos en DOM

/*
Ejercicio 1:
Crea una lista (<ul>) con varios elementos (<li>). Escribe un script que agregue un evento click a cada elemento de 
la lista para que, cuando se haga clic en un li, se muestre su texto en la consola.
*/

/*
const li1 = document.getElementById('elemento 1');
const li2 = document.getElementById('elemento 2');
const li3 = document.getElementById('elemento 3'); 
const li4 = document.getElementById('elemento 4');

const showTextInConsoleli1 = () => {
  console.log(li1.textContent);
}; 

const showTextInConsoleli2 = () => {
  console.log(li2.textContent);
};

const showTextInConsoleli3 = () => {
  console.log(li3.textContent);
};

const showTextInConsoleli4 = () => {
  console.log(li4.textContent);
};

li1.addEventListener('click', () => { 
  showTextInConsoleli1();
});

li2.addEventListener('click', () => {
  showTextInConsoleli2();
});

li3.addEventListener('click', () => {
  showTextInConsoleli3();
});

li4.addEventListener('click', () => {
  showTextInConsoleli4();
});
*/

/*
Ejercicio 2:
Crea un campo de texto y un botón en una página HTML. Escribe un script que haga que el botón deshabilite el campo de texto cuando se haga clic 
en él. Luego, añade otro botón que vuelva a habilitar el campo de texto.
*/

/*
const botonDesabilitar = document.getElementById('buttonDesabilitar');
const botonHabilitar = document.getElementById('buttonHabilitar');
const textFieldButtons = document.getElementById('textField');

const habilitarCampo = () => {
  textFieldButtons.disabled = false;
};

const desabilitarCampo = () => {
  textFieldButtons.disabled = true;
};

botonHabilitar.addEventListener('click',() => {
  habilitarCampo();
});

botonDesabilitar.addEventListener('click',() => {
  desabilitarCampo();
});
*/

//9.LocalStorage

/*
Ejercicio 1:
Crea un formulario con un campo para el correo electrónico. Escribe un script que guarde el correo en localStorage 
cuando el usuario envíe el formulario. si este existe muestralo en el dom debajo del input y tambien haz un botón de 
eliminar este elemento, al recargar la pagina este debe mostrarse si 
*/

/*
const getDataEmail = () => {
  const email = document.getElementById('email').value;
  localStorage.setItem("dato",JSON.stringify({
    email
  }));
}

const mostrarCorreoGuardado = () => {
  const emailStorage = localStorage.getItem("dato");
  const emailSaved = document.getElementById('emailGuardado');
  const buttonDeleteEmail = document.getElementById('buttonEliminarEmail');
  if (emailStorage){
    const emailData = JSON.parse(emailStorage);
    emailSaved.textContent = `Correo guardado:${emailData.email}`;
    buttonDeleteEmail.textContent = "Eliminar Correo Guardado";
  }else{
    emailSaved.textContent = "El email no ha sido ingresado o ha sido eliminado";
  }
}

const buttonEliminarEmail = document.getElementById('buttonEliminarEmail').addEventListener('click',() => {
  localStorage.removeItem("dato");
  mostrarCorreoGuardado();
})

const buttonGuardar = document.getElementById('guardarCorreo').addEventListener('click',()=>{
  getDataEmail();
  mostrarCorreoGuardado();
});

document.addEventListener('DOMContentLoaded', () => {
  mostrarCorreoGuardado();
})
*/

























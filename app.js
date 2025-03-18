// Definicion variables
"use strict";
let amigos = []; // Arreglo donde irán guardando los datos ingresados
let amigosDuplicados = []; // Arreglo temporal para validar que no se ingrese un nombre duplicado
const amigoEntrada = document.getElementById("amigo"); // Elemento CajaDeEntrada donde se digitan los nombres
const listaDeAmigos = document.getElementById("listaAmigos"); // Elemento Lista donde se irán agregando los amigos
const resultado = document.getElementById("resultado"); // Elemento Lista donde se mostrará al amigo secreto
const btnAgregar = document.querySelector(".button-add"); // Elemento Botón "Añadir"
const btnSortear = document.querySelector(".button-draw"); // Elemento Botón "Sortear amigo"
let primerNombre = true; // Variable para validar si es el primer nombre a ingresar
const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array creado para la validación de que los nombres ingresados solo contengan letras
let nombreEsValido = true; // Variable usada para ejecutar el código y agregar el nombre a la lista

// Condiciones Iniciales
// Establezco todas las configuraciones por default nuevamente, los arreglos se vacían, la CajaDeEntrada donde se ingresan los nombres se activa y se borra el valor en ella, las listas donde se muestran los amigos y resultado se borran, y a los botones
// se les vuelve a agregar el atributo para que puedan llamar a sus respectivas funcionan al ser clicados.
function condicionesIniciales() {
  amigos = [];
  amigosDuplicados = [];
  amigoEntrada.disabled = false;
  amigoEntrada.value = "";
  listaDeAmigos.innerHTML = "";
  resultado.innerHTML = "";
  btnAgregar.setAttribute("onclick", "agregarAmigo()");
  btnSortear.setAttribute("onclick", "sortearAmigo()");
  primerNombre = true;
  nombreEsValido = true;
}

// Capturar el valor del campo de entrada
function agregarAmigo() {
  nombreEsValido = true;
  const valorString = amigoEntrada.value;
  amigosDuplicados = [];
  // Creo esta funcion para evitar duplicidad de código, agrega el nombre ingresado a la ListaAmigos
  function agregarAmigoLista() {
    amigos.push(valorString); // Agrega el nombre ingresado al arreglo amigos
    amigoEntrada.value = ""; // Limpia el valor de la CajaDeEntrada
    const item = document.createElement("li"); // Crea un elemento "List Item", y se le asigna a la variable item
    listaDeAmigos.appendChild(item); // Agregamos el item a la ListaDeAmigos
    item.textContent = valorString; // Asignamos como texto el nombre ingresado por el usuario
  }
  // Si no hay input, generamos un mensaje de alerta y se sale de la función inmediatamente.
  if (!valorString) {
    alert("Por favor, ingrese un nombre");
    return;
  }
  // Con el for valido que los nombres no incluyan números
  for (let i = 0; i < numeros.length; i++) {
    if (valorString.includes(numeros[i])) {
      alert("Los números no forman parte de un nombre válido");
      amigoEntrada.value = "";
      nombreEsValido = false;
      break;
    }
  }
  if (nombreEsValido) {
    // Al ser primerNombre = true, se agregará el primer nombre automáticamente con agregarAmigoLista()
    if (primerNombre) {
      agregarAmigoLista();
      primerNombre = false; // Asignamos el valor a falso porque el primer nombre ya se ingresó
    } else {
      // Creamos el arreglo "amigosDuplicados" para validar si hay duplicados, esté arreglo es igual a todos los elementos del arreglo "amigos" pero en minusculas.
      for (let i = 0; i < amigos.length; i++) {
        amigosDuplicados.push(amigos[i].toLowerCase());
      }
      // Verificamos si el nombre de amigo ingresado (convertido a minusculas) está incluido (existe) en el arreglo temporal
      // de existir, se envía una alerta informando que ya existe y se vacía el elemento caja.
      if (amigosDuplicados.includes(valorString.toLowerCase())) {
        alert("El nombre ya fue ingresado");
        amigoEntrada.value = "";
      } else {
        // Caso contrario se agrega el nombre a la ListaDeAmigos
        agregarAmigoLista();
      }
    }
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    // Si "amigos" no tiene al menos 2 nombres no se efectuará el sorteo
    alert("Se requiere al menos 2 nombres para hacer un sorteo");
  } else {
    btnAgregar.setAttribute("onclick", ""); // Desactivo el botón "Añadir"
    amigoEntrada.disabled = true; // Desactivo la CajaDeEntrada
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genero indice aleario [0] a [amigos.length-1]
    const item = document.createElement("li"); // Agrego un elemento "list Item", lo asigno a la variable item
    resultado.appendChild(item); // Agrego este item a la lista "resultado"
    listaDeAmigos.innerHTML = ""; // Limpio la listaDeAmigos ()
    item.textContent = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`; // Agrego la cadena con el resultado
    btnSortear.setAttribute("onclick", ""); // Desactivo el botón "Sortear"
  }
}
// Al final del sorteo, la CajaDeEntrada, el botón "Añadir", y el botón "Sortear amigo" quedan desactivados
// He agregado un nuevo botón "Nuevo juego", el cual al ser clicado llama a la función condicionesIniciales(),
// lo que permitirá empezar un nuevo juego, con todos los valores por default.

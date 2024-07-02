// Declara aqui tus variables
let mario = document.querySelector(".mario");

let moneda = document.querySelector(".moneda");

let BotonSalto = document.querySelector(".saltar");

let BotonBajo = document.querySelector(".bajar")

let BotonIzquierda =document.querySelector(".izquierda");

let BotonDerecha = document.querySelector(".derecha");

let BotonColor=document.querySelector(".cambiar-color");

let BotonFin=document.querySelector(".finalizar");

let BotonActualizar=document.querySelector(".actualizar-puntaje");

let BotonCrecer=document.querySelector(".crecer")

// Actualizar la posición
/* Problema 1:Cuando se presione el botón "Saltar", Mario debe subir 
hasta donde esta la moneda, y esta debe desaparecer */
BotonSalto.onclick = function(){
  let posicionActual = parseInt(mario.style.bottom) || 35;
  const cantidadPixelesPorSalto = 110;
  const limiteSuperior = 145;
  
  
  let nuevaPosicion = posicionActual + cantidadPixelesPorSalto;
  if (nuevaPosicion <= limiteSuperior) {
    mario.style.bottom = nuevaPosicion + "px";
    moneda.style.visibility = "hidden";
  }
};

/*Problema 2 : Cuando se presione de nuevo el boton "Bajar" Mario baja al nivel del suelo de nuevo */
BotonBajo.onclick =function(){
  let posicionActual= parseInt(mario.style.bottom) || 145;
  const cantidadPixelesPorSalto = -110;
  const limiteCaida = 35;
 
  let nuevaPosicion = posicionActual + cantidadPixelesPorSalto;
  if (nuevaPosicion <= limiteCaida) {
    mario.style.bottom = nuevaPosicion + "px"; 
  }
};


// 3: Cuando el botón "Cambiar el color" es presionado, el color de fondo cambia

BotonColor.onclick = function(){
  document.body.style.backgroundColor = "orange";
};

// 4: Cuando el botón "Finalizar juego" es presionado, el título de la página dice "Game over"

BotonFin.onclick = function(){
  let TituloOver= document.querySelector("h1");
  TituloOver.innerHTML = "GAME OVER";
};


// 5: Cuando el botón "Actualizar Puntaje" es presionado, el contador de puntuación se establece en "1" en lugar de 0

BotonActualizar.onclick = function(){
  let Puntaje = document.querySelector(".score");
  Puntaje.innerHTML = "1";
}

// 6: Cuando el botón "Crecer" es presionado, la imagen de Mario se debe hacer más grande.


BotonCrecer.onclick =function (){
  mario.style.height="65px";
}

//7: Ya el boton de mover a la derecha esta hecho. Haz ahora uno para que se mueva a la izquierda.

BotonDerecha.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; // Obtener la posición actual (si no la consigue empienza en 75)
  const cantidadPixelesPorPaso = 10; // Cantidad de píxeles a mover
  const limiteDerecha = 700; // 700px es lo maximo que se va a mover para que no se salga de la pantalla

  // Calcular la nueva posición
  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteDerecha) {
    mario.style.left = nuevaPosicion + "px"; // Actualizar la posición
  }
};

// Haz aqui el boton de mover a la izquierda

BotonIzquierda.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 35; // 
  const cantidadPixelesPorPaso = -10; 
  const limiteizquierdo = 100; 

  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteizquierdo) {
    mario.style.left = nuevaPosicion + "px"; 
  }
};

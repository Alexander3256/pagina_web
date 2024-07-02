function mostrarResultado(resultado){    
    document.querySelector(".resultado").style.color = "black";
    document.querySelector(".resultado").innerHTML = resultado;
}

function mensajeError(mensaje){    
    document.querySelector(".resultado").style.color = "red";
    document.querySelector(".resultado").innerHTML = mensaje;
    
}

//Declara tus funciones aquí
function suma(numeroA,numeroB){
     let resul=numeroA+numeroB;
     return resul;
}
function resta(numeroA,numeroB){
	let resul =numeroA-numeroB;
    return resul;
}
function mul(numeroA,numeroB){
	let resul =numeroA*numeroB;
    return resul;
}
function div(numeroA,numeroB){
	let resul =numeroA/numeroB;
    return resul;
}

// Boton sumar
document.querySelector(".sumar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
    if ((numeroA>=0 || numeroA<=0) && (numeroB>=0||numeroB<=0))
    { let resulSuma = suma(numeroA,numeroB);
    mostrarResultado(resulSuma);
    }
    else{let fallo="mensajeDeError";
     mensajeError(fallo);
    }
  
    
    
});

// Boton restar
document.querySelector(".restar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	 if ((numeroA>=0 || numeroA<=0) && (numeroB>=0||numeroB<=0))
    { let resulResta = resta(numeroA,numeroB);
    mostrarResultado(resulResta);
    }
    else{let fallo="mensajeDeError";
     mensajeError(fallo);
    }
    
});

// Boton multiplicar
document.querySelector(".multiplicar-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	 if ((numeroA>=0 || numeroA<=0) && (numeroB>=0||numeroB<=0))
    { let resulMul = mul(numeroA,numeroB);
    mostrarResultado(resulMul);
    }
    else{let fallo="mensajeDeError";
     mensajeError(fallo);
    }
    
});

// Boton dividir
document.querySelector(".dividir-boton").addEventListener('click', function(){    
    //Obtenemos lo que el usuario ingresó en el input
    let numeroA = Number(document.querySelector(".primer-numero").value);
    let numeroB = Number(document.querySelector(".segundo-numero").value);
  	 if ((numeroA>=0 || numeroA<=0) && (numeroB>=0||numeroB<=0))
    { let resulDiv = div(numeroA,numeroB);
    mostrarResultado(resulDiv);
    }
    else{let fallo="mensajeDeError";
     mensajeError(fallo);
    }
    
});

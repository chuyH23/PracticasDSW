//Jesus Hernandez Ruiz

let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo.svg", "machu-pichu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];//arreglo donde estan las imagenes svg y se usaran
let correcta = [1,0,2,1,2,0,1];//aqui es un arreglo donde se ponen las respeustas correctas


let opciones = [];//arreglo con las opciones de respuestas que se usaran en cada pregunta

opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){//funcion que comienza el juego inicializando en cero
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();//lama la funcion cargar maravilla

}

function cargarMaravilla(){//funcion que recoree las imagenes y da la posicion actual
    if(maravillas.length <= posActual){
        terminarJuego();//se llama la funcion de terminar
    }
    else{
        limpiarOpciones();//se llama la funcion de limpiar

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];//se llama la imagen 
        document.getElementById("n0").innerHTML = opciones[posActual][0];//se llaman las respuestas posibles
        document.getElementById("n1").innerHTML = opciones[posActual][1];//se llaman las respuestas posibles
        document.getElementById("n2").innerHTML = opciones[posActual][2];//se llaman las respuestas posibles
    }
}

function limpiarOpciones(){//limpia todo
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){//funcion de seleccion de opcion
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);
}
function terminarJuego(){//funcion que termina el juego totalmente
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){//funcion para volver a iniciar el juego
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
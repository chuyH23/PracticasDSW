//Jesus Hernandez Ruiz

let maravillas = ["unshowmas.jpg", "japon.webp", "rojo.png", "hermosillo.jpg", "toad.jpg","snorlax.png","Bender.png","lobo.jpg","pizza.jpg","sheldon.jpg"];//arreglo donde estan las imagenes svg y se usaran
let correcta = [3,0,0,0,3,1,0,0,0,0];//aqui es un arreglo donde se ponen las respeustas correctas


let opciones = [];//arreglo con las opciones de respuestas que se usaran en cada pregunta

opciones.push(["Big ban teory", "walking dead", "jake y josh","un show mas"]);
opciones.push(["Japon", "Mexico", "España","argentina"]);
opciones.push(["rojo", "verde", "azul","morado"]);
opciones.push(["hermosillo", "culiacan", "aguscalientes","chilpansingo"]);
opciones.push(["mario", "yoshi", "bowser","toad"]);
opciones.push(["picachu", "snorlax", "charmander","bulbasour"]);
opciones.push(["bender", "froid", "abuelo","lisa"]);
opciones.push(["lobo", "zorro", "oso","changuito"]);
opciones.push(["pizza", "torta", "milanesa","ensalada"]);
opciones.push(["sheldon", "penny", "leonar","will wheaton"]);
//se estan argregando al arreglo vacio
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

        document.getElementById("imgMaravilla").src = "imagen32/" + maravillas[posActual];//se llama la imagen 
        document.getElementById("n0").innerHTML = opciones[posActual][0];//se llaman las respuestas posibles
        document.getElementById("n1").innerHTML = opciones[posActual][1];//se llaman las respuestas posibles
        document.getElementById("n2").innerHTML = opciones[posActual][2];//se llaman las respuestas posibles
        document.getElementById("n3").innerHTML = opciones[posActual][3];//se llaman las respuestas posibles
    }
}

function limpiarOpciones(){//limpia todo para que no aparezcan seleccionadas las opciones
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
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
function terminarJuego(){//funcion que termina el juego totalmente, esta el  despliegue de las pantallas
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){//funcion para volver a iniciar el juego, esta el  despliegue de las pantallas finales,iniciales y la del juego
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
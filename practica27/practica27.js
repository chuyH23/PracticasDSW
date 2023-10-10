var peso= prompt("escribe tu peso")

var opcion= prompt("escribe 1 o 2")

var peso_tierra=9.8;

var peso_marte=3.7;

var peso_jupiter=24.7;

var resultado;

var opcionchida = parseFloat(opcion);

/*
switch(opcionchida){

    case 1:
        resultado=(peso*peso_marte)/peso_tierra
        alert("su peso es: "+resultado);
        break;

        case 2:
            resultado=(peso*peso_jupiter)/peso_tierra
            alert("su peso es: "+resultado);
            break;
    
        
    
        default:
        alert("error fuera de rango entre 1-2");
        break;
    
    }
    
*/


if(opcionchida==1){
    resultado=(peso*peso_marte)/peso_tierra
    alert("su peso es: "+resultado);
}
else if(opcionchida==2){
    resultado=(peso*peso_jupiter)/peso_tierra
    alert("su peso es: "+resultado);

}else{
    alert("error fuera de rango entre 1-2");

}

//ejercicio 1

function ParImpar(){

   var numero = parseInt(prompt("ingrese un numero para averguar si es par o impar"));
    
  //  var numero= prompt("ingrese un numero para averguar si es par o impar")
   // var numPreguntado = parseFloat(numero);

if (numero%2==0){
alert("tu numero es par");
}else{
    alert("tu numero es impar");
}
}

ParImpar();




//ejercicio 2



function AvisoHuracan(){

    if (AvisoHuracann==true){
alert("hay un huracan");
    }

else{
    alert("es un dia soleado");
}

}
AvisoHuracann=true;
AvisoHuracan();


//ejercicio 3

function OperacionesMatematicas(){

    var pregunta= prompt("ingrese una operacion matematica: ")
    var num1 = parseInt(prompt("ingrese el valor de a"));
    var num2 = parseInt(prompt("ingrese el valor de b"));
var resultado;
switch(pregunta){

case("suma"):
resultado=num1+num2;
alert("el resultado de la suma es: "+resultado);
break;

case("resta"):
resultado=num1-num2;
alert("el resultado de la resta es: "+resultado);
break;

case("multiplicacion"):
resultado=num1*num2;
alert("el resultado de la multiplicacion es: "+resultado);
break;

case("division"):
resultado=num1/num2;
alert("el resultado de la division es: "+resultado);
break;


default:
        alert("error de algun tipo");
        break;

}
}
OperacionesMatematicas();








//JESUS HERNANDEZ RUIZ
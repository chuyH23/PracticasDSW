//JESUS HERNANDEZ RUIZ
//parte 1
var valores=[true, 10, false, "codigo", "herramientas", 7];

resultado2=valores[4]<valores[5];//falso

if(resultado2==true){
    alert("codigo es mayor");
}else{
    alert("herramientas es mayor");
}
//parte 2
Falsoo=valores[0] != valores[2];
verdaderoo=valores[0] == valores[2];
alert(Falsoo+"\n"+verdaderoo);

//parte 3
var suma = (valores[1]+ valores[5]);
var resta = (valores[1]-valores[5]);
var multiplicacion = (valores[1]* valores[5]);
var division= (valores[1]/ valores[5]);

var mensaje = "Suma = " + suma + "\nResta = " + resta + "\nMultiplicación = " + multiplicacion + "\nDivisión = " + division;

alert(mensaje);


//ejercicio 4
/*
for(i=1;i <= 7; i++){

    if(i==4){
        alert("hola este es el 4to hola");
    }
alert("Hola");

}
alert("ya saludamos");
*/


//ejercicio 5
/*
var año = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio", "agosto", "septiembre", "octubre", "noviembre"];


//for in

alert("Usando for in ");
for (const index in año) {
  alert(año[index]);
  
}

//for each

alert("Usando forEach:");
año.forEach(function(mes) {
  alert(mes);
});

//for of

alert("Usando for of:");
for (const mes of año) {
  alert(mes);
}
*/

//ejercicio 6

var año = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio", "agosto", "septiembre", "octubre", "noviembre"];
for (var indice in año) {
    if (año[indice] !== 'julio') {
        alert(año[indice]);
    }
}
año.push('diciembre');

alert('Todos los meses:');
for (var indice in año) {
    alert(año[indice]);
}

  
//JESUS HERNANDEZ RUIZ
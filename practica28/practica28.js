//ejercicio 1

var semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

alert("Arreglo original:");
alert(semana);

semana.push("Uso de push");
alert("Arreglo con el uso de push:");
alert(semana);

semana.pop();
alert("Arreglo con el uso de pop:");
alert(semana);

semana.splice(1, 1);
alert("Arreglo con el uso de splice:");
alert(semana);


//ejercicio 2
var i=1;
var suma=0;
while (i <= 5) {
    suma += i; 
    i++; 
}

alert("La suma de los números del 1 al 5 es: " + suma);



//ejercicio 3

var numero = 5;
var factorial = 1;

do {
    factorial *= numero;
    numero--;
} while (numero > 0);

alert("El factorial de 5 es: " + factorial);



//Jesus Hernandez Ruiz
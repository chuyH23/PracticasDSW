function Promedio(){

    var numwero1 = parseInt(document.getElementById("calif1").value)
    var numwero2 = parseInt(document.getElementById("calif2").value)
    var numwero3 = parseInt(document.getElementById("calif3").value)
    var numwero4 = parseInt(document.getElementById("calif4").value)
    var numwero5 = parseInt(document.getElementById("calif5").value)
    var numwero6 = parseInt(document.getElementById("calif6").value)
    var numwero7 = parseInt(document.getElementById("calif7").value)
    var numwero8 = parseInt(document.getElementById("calif8").value)
    var resultado;

    resultado=(numwero1+numwero2+numwero3+numwero4+numwero5+numwero6+numwero7+numwero8)/8

if(resultado>=8.5){
    alert("estas excento")
}else{
    alert("no estas excento")
}

    alert("el promedio es:"+resultado)

}

function validar(){
  
    bandera=0;

if(document.getElementById("calif1").value==0 || document.getElementById("calif1").value==null){
    document.getElementById("calif1").focus();
    bandera=1;
}else if(document.getElementById("calif2").value==0|| document.getElementById("calif2").value==null){
    document.getElementById("calif2").focus();
    bandera=1;
}else if(document.getElementById("calif3").value==0|| document.getElementById("calif3").value==null){
    document.getElementById("calif3").focus();
    bandera=1;
}else if(document.getElementById("calif4").value==0|| document.getElementById("calif4").value==null){
    document.getElementById("calif4").focus();
    bandera=1;
}else if(document.getElementById("calif5").value==0|| document.getElementById("calif5").value==null){
    document.getElementById("calif5").focus();
    bandera=1;
}else if(document.getElementById("calif6").value==0|| document.getElementById("calif6").value==null){
    document.getElementById("calif6").focus();
    bandera=1;
}else if(document.getElementById("calif7").value==0|| document.getElementById("calif7").value==null){
    document.getElementById("calif7").focus();
    bandera=1;
}else if(document.getElementById("calif8").value==0|| document.getElementById("calif8").value==null){
    document.getElementById("calif8").focus();
    bandera=1;
}else if( bandera==0){
     Promedio();
}else{
    alert("falta llenar campos");
}
       
}
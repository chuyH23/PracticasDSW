<?php
$servidor = "localhost";
$usuario = "root";
$clave = "";
$bd = "registrocontactos";
$conexion = mysqli_connect ($servidor, $usuario, $clave, $bd);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro contactos</title>
</head>
<body>
    <form action= "#" name="registrocontactos" method="post">
        <input type="text" name="nombre" placeholder="nombre">
        <input type="text" name="telefono" placeholder="telefono">
        <input type="email" name="correo" placeholder="correo">
        <input type="text" name="comentarios" placeholder="comentarios">

    <input type ="submit" name="registro">

    </body>
</html>


<?php

if(isset($_POST['registro'])){

$nombre=$_POST['nombre'];
$telefono=$_POST['telefono'];
$correo=$_POST['correo'];
$comentarios=$_POST['comentarios'];

$guardar = "INSERT INTO contactos VALUES ('$nombre','$telefono','$correo','$comentarios','')";

$ejecutar = mysqli_query ($conexion,$guardar);

}

?>
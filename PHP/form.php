<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Puedes realizar validaciones aquí si es necesario

    // Enviar el correo electrónico (puedes utilizar alguna librería como PHPMailer)
    $destinatario = "correo@example.com";
    $asunto = "Nuevo mensaje de contacto";
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Correo electrónico: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    mail($destinatario, $asunto, $cuerpoMensaje);

    // Puedes redirigir a una página de confirmación
    header("Location: confirmacion.html");
    exit();
}
?>

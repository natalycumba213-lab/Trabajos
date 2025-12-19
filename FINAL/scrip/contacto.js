// 1. Seleccionamos el formulario usando su ID
const formulario = document.getElementById('formularioContacto');

// 2. Escuchamos el evento de envío (submit)
formulario.addEventListener('submit', function(evento) {
    
    // Frenamos el envío automático para validar primero
    evento.preventDefault();

    // 3. Capturamos los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // 4. VALIDACIONES CON ALERTAS
    
    // Validar Nombre
    if (nombre === "") {
        alert("¡Atención! Por favor, ingresá tu nombre.");
        return; // Detiene el código aquí
    }

    // Validar Email vacío
    if (email === "") {
        alert("¡Atención! El correo electrónico es obligatorio.");
        return;
    }

    // Validar formato de Email (que tenga un @)
    if (!email.includes("@") || !email.includes(".")) {
        alert("¡Error! Por favor, ingresá un correo electrónico válido (ejemplo@correo.com).");
        return;
    }

    // Validar Mensaje
    if (mensaje === "") {
        alert("¡Atención! No podés enviar un mensaje vacío.");
        return;
    }

    // 5. SI TODO ESTÁ BIEN
    alert("¡Muchas gracias, " + nombre + "! Tu mensaje ha sido enviado con éxito. Nos contactaremos pronto.");
    
    // Limpiamos los campos después del envío exitoso
    formulario.reset();
});
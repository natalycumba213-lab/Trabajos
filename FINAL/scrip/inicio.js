// JAVA PARA MENU PAG PRINCIPAL 

function toggleMenu() {
    const overlay = document.getElementById("overlay");
    overlay.classList.toggle("active");  }
   
  
  window.onscroll = function() {
    actualizarBarraProgreso();};

function actualizarBarraProgreso() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
}

// DARK
function cambiarModo() {
   var cuerpo = document.body;
   // Esto hace exactamente lo mismo que tu ejemplo: quita o pone la clase
   cuerpo.classList.toggle("dark-mode");
}

//BOTON DONAR
// Funciones para abrir y cerrar
function abrirModal() {
  document.getElementById("modal-donar").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal-donar").style.display = "none";
}

// Cerrar si hacen clic fuera de la caja blanca
window.onclick = function(event) {
  let modal = document.getElementById("modal-donar");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Lógica de los contadores (La parte que va aumentando)
let conteo = {
  camas: 0,
  comida: 0
};

function comprarItem(tipo) {
  conteo[tipo]++; // Suma 1 al contador
  
  if(tipo === 'camas') {
    document.getElementById("contador-camas").innerText = conteo.camas;
  } else {
    document.getElementById("contador-comida").innerText = conteo.comida;
  }
}
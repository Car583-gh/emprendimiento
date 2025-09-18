document.addEventListener('DOMContentLoaded', () => {

  // ===== BOTONES + / - =====
  const botonMas = document.querySelector('.mas');
  const botonMenos = document.querySelector('.menos');
  const cantidadSpan = document.querySelector('.cantidad span');
  const botonWhatsApp = document.querySelector('.btn.whatsapp');

  let cantidad = parseInt(cantidadSpan.textContent);
  const precioTexto = document.querySelector('.precio').textContent;
  const precioUnidad = parseInt(precioTexto.replace(/\D/g, ''));
  const nombreProducto = document.querySelector('h1').textContent;

  botonMas.addEventListener('click', () => {
    cantidad++;
    cantidadSpan.textContent = cantidad;
  });

  botonMenos.addEventListener('click', () => {
    if (cantidad > 1) {
      cantidad--;
      cantidadSpan.textContent = cantidad;
    }
  });

  botonWhatsApp.addEventListener('click', () => {
    const total = cantidad * precioUnidad;
    const mensaje = `¡Hola! Me interesa comprar: *${nombreProducto}* 
Precio: $${precioUnidad}
Cantidad: ${cantidad}
Total: $${total}
¿Podés confirmarme la disponibilidad?`;
    const numero = '5493412780058';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });

  // ===== FILTRO DE CATEGORÍAS =====
  const botones = document.querySelectorAll(".botones button");
  const productos = document.querySelectorAll(".producto");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {

      // Quitar clase activo de todos
      botones.forEach(btn => btn.classList.remove('activo'));
      boton.classList.add('activo');

      const categoria = boton.textContent.trim().toLowerCase();

      productos.forEach(prod => {
        const prodCategoria = (prod.dataset.categoria || "").trim().toLowerCase();
        if (categoria === "todos" || prodCategoria === categoria) {
          prod.style.display = "block";
        } else {
          prod.style.display = "none";
        }
      });

    });
  });


});




//DEFINE OBJETO
const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById("carrito");
const procesarCompraBtn = document.getElementById("procesar-compra");
const cliente = document.getElementById("cliente");
const correo = document.getElementById("correo");

cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStorageCompra()
  );

  //Eliminar productos del carrito
  carrito.addEventListener("click", (e) => {
    compra.eliminarProducto(e);
  });

  compra.calcularTotal();

  //cuando se selecciona procesar Compra
  procesarCompraBtn.addEventListener("click", procesarCompra);

  carrito.addEventListener("change", (e) => {
    compra.obtenerEvento(e);
  });
  carrito.addEventListener("keyup", (e) => {
    compra.obtenerEvento(e);
  });
}

function procesarCompra() {
  // Verificamos cantidad 0
  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "No hay productos, selecciona alguno",
      showConfirmButton: false,
      timer: 2000,
    }).then(function () {
      window.location = "index.html";
    });
  }
  // Verificamos cantidad NULL
  else if (cliente.value === "" || correo.value === "") {
    Swal.fire({
      type: "error",
      title: "Oops...",
      text: "Ingrese todos los campos requeridos",
      showConfirmButton: false,
      timer: 2000,
    });
  } else {
    //aqui se muestra alerta
    let var_name = document.getElementById("cliente").value;
    let var_mail = document.getElementById("correo").value;
    Swal.fire({
      title: "Pedido Registado",
      html:
        "<p>Email:" + var_name + " </p><p>Email enviado a " + var_mail + "</p>",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  }
}

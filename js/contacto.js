let variante1 = /^[a-zA-Z ]+$/;
let variante2 = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

function verificador() {
  let inputo = document.getElementById("txt_name").value;

  if (variante1.test(inputo)) {
    console.log("true");
    document
      .getElementById("usuario__container")
      .classList.add("container__green");
    document
      .getElementById("usuario__container")
      .classList.remove("container__red");
  } else {
    console.log("false");
    document
      .getElementById("usuario__container")
      .classList.remove("container__green");
    document
      .getElementById("usuario__container")
      .classList.add("container__red");
  }
}

function verificador_correo() {
  let inputo = document.getElementById("txt_mail").value;

  if (variante2.test(inputo)) {
    console.log("true");
    document
      .getElementById("correo__container")
      .classList.add("container__green");
    document
      .getElementById("correo__container")
      .classList.remove("container__red");
  } else {
    console.log("false");
    document
      .getElementById("correo__container")
      .classList.remove("container__green");
    document
      .getElementById("correo__container")
      .classList.add("container__red");
  }
}

function enviar_form() {
  let var_name = document.getElementById("txt_name").value;
  let var_mail = document.getElementById("txt_mail").value;

  if (variante1.test(var_name) || variante2.test(var_mail)) {
    Swal.fire({
      title: "Datos Correctos",
      html:
        "<p>Email:" + var_name + " </p><p>Email enviado a " + var_mail + "</p>",
      icon: "success",
      confirmButtonText: "Cool",
    });
  } else {
    Swal.fire("Error", "Estan bien todos los datos?", "question");
  }
}

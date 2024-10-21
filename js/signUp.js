// CLASE 13: validaciones de forms
window.addEventListener("load", () => {
  const form = document.getElementById("formSignUp");
  const password = document.getElementById("inputPassword");
  const mirrorPassword = document.getElementById("mirrorPassword");
  let flagAviso = false;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
  });

  const validate = () => {
    const valuePassword = password.value.trim();
    const clonePassword = mirrorPassword.value.trim();

    if (valuePassword === clonePassword) {
      alertExito();
      if (flagAviso) {
        let aviso = document.querySelector(".error-message");
        password.parentElement.removeChild(aviso);
        flagAviso = false; 
      }
    } else {
      alertError();
      CrearError();
    }
  };

  const CrearError = () => {
    if (!flagAviso) {
      let divInput = password.parentElement;
      let aviso = document.querySelector(".error-message");

      aviso = document.createElement("div");
      aviso.className = "alert alert-danger mx-auto mt-3 error-message";
      aviso.innerText = "Asegúrese de que las contraseñas coincidan";
      aviso.style = "max-width: 400px; padding: 10px;";
      divInput.appendChild(aviso);

      flagAviso = true;
    }
  };

  const alertExito = () => {
    swal({
      title: "¡Éxito!",
      text: "Se ha registrado con éxito",
      icon: "success",
      confirmButtonClass: "btn-success",
      confirmButtonText: "OK",
    });
  };

  const alertError = () => {
    swal({
      title: "¡Error!",
      text: "Las contraseñas no coinciden",
      icon: "error",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "OK",
    });
  };
});

const navbar = document.querySelector(".navbar");
const btnColapso = document.getElementById("btnToggler");
const menuColapso = document.getElementById("navbarNav");

// le da color al nav-bar desplegable para pantallas chicas
btnColapso.addEventListener("click", () => {
  if (menuColapso.classList.contains("collapsing")) {
    navbar.classList.add("bg-dark");
  }

  if (btnColapso.classList.contains("collapsed")) {
    // delay de 300 ms 
    setTimeout(() => {
      navbar.classList.remove("bg-dark");
    }, 250);
  }
});

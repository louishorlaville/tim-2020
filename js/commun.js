(function () {
  let burgerIcon = document.querySelector("#bouton-burger");
  let burgerMenu = document.querySelector(".box-container-menu-burger");
  let burgerText = document.querySelector(".container-menu-burger");

  /*Intéraction Menu Burger*/
  if (burgerIcon) {
    console.log("ok");
    burgerIcon.addEventListener("click", toggleBurgerClass);
  }

  /*Toggle les class pour faire afficher et enlever le menu Burger*/
  function toggleBurgerClass() {
    if (burgerIcon.classList.contains("is-active")) {
      burgerMenu.classList.remove("burger-active");
      burgerMenu.classList.add("hide-burger");

      burgerText.classList.remove("menu-appear");
    } else {
      burgerMenu.classList.add("burger-active");
      burgerMenu.classList.remove("hide-burger");
      burgerText.classList.add("menu-appear");
    }
  }
})();

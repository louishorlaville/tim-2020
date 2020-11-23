(function () {
  let burgerIcon = document.querySelector(".hamburger");
  let burgerMenu = document.querySelector(".box-container-menu-burger");
  let burgerText = document.querySelector(".container-menu-burger");
  console.log("alright buddy");

  /*Intéraction Menu Burger*/
  burgerIcon.addEventListener("click", function () {
    toggleBurgerClass(burgerIcon);
  });

  /*Toggle les class pour faire afficher et enlever le menu Burger*/
  function toggleBurgerClass(button) {
    if (button.classList.contains("is-active")) {
      button.classList.remove("is-active");
      burgerMenu.classList.remove("burger-active");
      burgerMenu.classList.add("hide-burger");
      //   burgerText.classList.remove("menu-appear");
    } else {
      button.classList.add("is-active");
      burgerMenu.classList.add("burger-active");
      burgerMenu.classList.remove("hide-burger");
      //   burgerText.classList.add("menu-appear");
    }
  }
})();

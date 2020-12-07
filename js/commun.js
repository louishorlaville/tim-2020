(function () {
  let baliseLinkThemeCSS = document.querySelector(
    "link[href $= 'Couleurs.css']"
  );

  let themeDefaut = "jour";
  let themeEnregistre = localStorage.getItem("theme");
  // Vérifie s'il n'y a pas la propriété theme dans localStorage

  if (!localStorage.getItem("theme")) {
    // tu créé la prop avec theme = jour
    localStorage.setItem("theme", themeDefaut);
  } else {
    baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(
      /(nuit|jour)/,
      themeEnregistre
    );
  }

  let burgerIcon = document.querySelector("#bouton-burger");
  let burgerMenu = document.querySelector(".box-container-menu-burger");
  let burgerText = document.querySelector(".container-menu-burger");
  let toggleColor = document.querySelector(".container-toggle-color");

  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  /*Intéraction Menu Burger*/
  if (burgerIcon) {
    burgerIcon.addEventListener("click", toggleBurgerClass);
  }

  toggleColor.addEventListener("click", toggleTheme);

  /*Toggle les class pour faire afficher et enlever le menu Burger*/
  function toggleBurgerClass() {
    if (burgerIcon.classList.contains("is-active")) {
      burgerMenu.classList.remove("burger-active");
      burgerMenu.classList.add("hide-burger");
      burgerText.classList.remove("menu-appear");
      burgerIcon.classList.remove("is-active");
    } else {
      burgerMenu.classList.add("burger-active");
      burgerMenu.classList.remove("hide-burger");
      burgerText.classList.add("menu-appear");
      burgerIcon.classList.add("is-active");
    }
  }

  function toggleTheme() {
    let themeChoisi = "";
    if (baliseLinkThemeCSS.href.search(/jour/) > -1) {
      baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(/jour/, "nuit");
      themeChoisi = "nuit";
    } else {
      baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(/nuit/, "jour");
      themeChoisi = "jour";
    }
    localStorage.setItem("theme", themeChoisi);
  }
})();

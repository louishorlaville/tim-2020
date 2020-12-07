(function () {
  let baliseLinkThemeCSS = document.querySelector(
    "link[href $= 'Couleurs.css']"
  );
  //Éléments du bouton toggle
  let spanToggleTheme = [
    document.querySelector(".toggle-theme-before"),
    document.querySelector(".toggle-theme-after"),
    document.querySelector(".toggle-theme-span"),
  ];
  let themeDefaut = "jour";
  let themeEnregistre = localStorage.getItem("theme");

  // Vérifie s'il n'y a pas la propriété theme dans localStorage
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", themeDefaut);
  } else {
    //Mettre les couleurs en fonction du theme enregistré
    baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(
      /(nuit|jour)/,
      themeEnregistre
    );
    //Mettre le style du bouton toggle en fonction du theme enregistré
    spanToggleTheme.forEach((element) => {
      element.classList.toggle("nuit", themeEnregistre == "nuit");
    });
  }

  //Éléments du menu Burger
  let burgerIcon = document.querySelector("#bouton-burger");
  let burgerMenu = document.querySelector(".box-container-menu-burger");
  let burgerText = document.querySelector(".container-menu-burger");
  let toggleColor = document.querySelector(".container-toggle-theme");

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
      // Activer style bouton
      spanToggleTheme.forEach((element) => {
        element.classList.add("nuit");
        element.classList.remove("jour");
      });

      baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(/jour/, "nuit");
      themeChoisi = "nuit";
    } else {
      // Désactiver style bouton
      spanToggleTheme.forEach((element) => {
        element.classList.remove("nuit");
        element.classList.add("jour");
      });

      baliseLinkThemeCSS.href = baliseLinkThemeCSS.href.replace(/nuit/, "jour");
      themeChoisi = "jour";
    }
    localStorage.setItem("theme", themeChoisi);
  }
})();

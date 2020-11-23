(function () {
  let btnMenuNvEtud = document.querySelector(
    "#position-container-etudiants-nouveaux"
  );
  let btnMenuEtudActu = document.querySelector(
    "#position-container-etudiants-actuels"
  );
  let logo = document.querySelector(".logo");
  let boites = [
    [btnMenuNvEtud, 0, 0.65],
    [btnMenuEtudActu, 0.56, 0.98],
  ];
  let burgerMenu = document.querySelector(".hamburger");

  //Placer les cercles et boites au chargement de la page
  window.addEventListener("load", function () {
    boites.forEach((elt) => {
      placerAbsolueAccueil(elt[0], elt[1], elt[2]);
    });
  });

  //Les replacer aux bons endroits au cas ou la page change de taille
  window.onresize = function () {
    boites.forEach((element) => {
      placerAbsolueAccueil(element[0], element[1], element[2]);
    });
  };

  burgerMenu.addEventListener("click", function () {
    toggleBurgerClass(burgerMenu);
  });

  let etNouvListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-et">GRILLE DE CHEMINEMENTS</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">VIE ÉTUDIANTE</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">STAGES</a></div></li>
    `;

  let etActuListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-et">GRILLE DE CHEMINEMENTS</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleDesProfs.php" class="button-menu-et">ENSEIGNANTS</a></div></li>
    `;

  btnMenuNvEtud.addEventListener("click", function () {
    fondu();
    setTimeout(function () {
      ajouterMenuEtudiant("NOUVEAUX ÉTUDIANTS", "color-1", etNouvListe);
    }, 0500);
  });

  btnMenuEtudActu.addEventListener("click", function () {
    fondu();
    setTimeout(function () {
      ajouterMenuEtudiant("ÉTUDIANTS ACTUELS", "color-2", etActuListe);
    }, 0500);
  });

  function fondu() {
    document.querySelector("#contenu-principal").classList.remove("fadein");
    document.querySelector("#contenu-principal").classList.add("fadeout");
  }

  function ajouterMenuEtudiant(menuTitle, menuType, listType) {
    document.querySelector("#contenu-principal").classList.remove("fadeout");
    document.querySelector("#contenu-principal").innerHTML =
      `
        <div id="container-etudiants-fullscreen" class="container-etudiants ` +
      menuType +
      `"> 
            <div id="container-etudiants-contenu">
                <div id="et-menu-title"><a class="button-back" href="index.php"><</a>` +
      menuTitle +
      `</div> 
                <div id="et-menu-contenu-container">
                    <div id="et-menu-contenu">
                        <div id="et-menu-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div id="et-menu-image" class="color-bg"><img src="" alt=""></div>
                    </div>
                    <div class="et-nav-container">
                        <div class="et-nav">
                            <div class="metro-nav-container">
                                <img class="croix-nav" src="./images/svg/whitePlus.svg"/>
                                <img class="metro-nav" src="./images/svg/ligneMetroMenu_1.svg"/>
                            </div>
                            <ul class="et-liensutiles-liste">
                            ` +
      listType +
      `
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }

  function toggleBurgerClass(button) {
    if (button.classList.contains("is-active")) {
      button.classList.remove("is-active");
    } else {
      button.classList.add("is-active");
    }
  }

  function placerAbsolueAccueil(element, width, height) {
    element.style.left = logo.clientWidth * width + "px";
    element.style.top = logo.clientHeight * height + "px";
  }
})();

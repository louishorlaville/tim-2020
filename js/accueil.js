(function () {
  let btnMenuNvEtud = document.querySelector(
    "#position-container-etudiants-nouveaux"
  );
  let btnMenuEtudActu = document.querySelector(
    "#position-container-etudiants-actuels"
  );
  let title = document.querySelector("#title");
  let logo = document.querySelector(".logo");
  let cercles = [
    [document.querySelector("#cercle-cap-N"), 0.1, -0.05],
    [document.querySelector("#cercle-cap-T"), 1.01, 0.36],
    [document.querySelector("#cercle-cap-I"), 0.52, 1.01],
  ];
  let boites = [
    [btnMenuNvEtud, 0, 0.65],
    [btnMenuEtudActu, 0.56, 0.98],
  ];
  let cerclesDesign = [
    [document.querySelector(".logo-cercle-border"), 0.62, 0.05],
    [document.querySelector(".cercle-n-border"), 0.062, 0.15],
  ];

  //Placer les cercles et boites au chargement de la page
  window.addEventListener("load", function () {
    cercles.forEach((elt) => {
      placerAbsolueAccueil(elt[0], elt[1], elt[2]);
    });
    boites.forEach((elt) => {
      placerAbsolueAccueil(elt[0], elt[1], elt[2]);
    });
    cerclesDesign.forEach((elt) => {
      placerAbsolueAccueil(elt[0], elt[1], elt[2]);
    });
  });

  //Les replacer aux bons endroits au cas ou la page change de taille
  window.onresize = function () {
    cercles.forEach((element) => {
      placerAbsolueAccueil(element[0], element[1], element[2]);
    });
    boites.forEach((element) => {
      placerAbsolueAccueil(element[0], element[1], element[2]);
    });
    cerclesDesign.forEach((elt) => {
      placerAbsolueAccueil(elt[0], elt[1], elt[2]);
    });
  };

  let etNouvListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">STAGES</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">VIE ÉTUDIANTE</a></div></li>
    `;

  let etActuListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.html" class="button-menu-et">GRILLE DE CHEMINEMENTS</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleDesProfs.html" class="button-menu-et">ENSEIGNANTS</a></div></li>
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
                            <ul id="et-liensutiles-liste">
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

  function placerAbsolueAccueil(element, width, height) {
    element.style.left = logo.clientWidth * width + "px";
    element.style.top = logo.clientHeight * height + "px";
  }
})();

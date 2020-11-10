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
    [btnMenuEtudActu, 0.55, 0.98],
  ];
  let cerclesDesign = [
    [document.querySelector(".logo-cercle-border"), 0.62, 0.05],
    [document.querySelector(".cercle-n-border"), 0.065, 0.21],
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
        <li><img class="listCircle" src="./images/white-circle.svg" /><a href="#" class="button">STAGES</a></li>
        <li><img class="listCircle" src="./images/white-circle.svg" /><a href="#" class="button">VIE ÉTUDIANTE</a></li>
    `;

  let etActuListe = `
        <li><img class="listCircle" src="./images/white-circle.svg" /><a href="pages/grilleCheminement.html" class="button">GRILLE DE CHEMINEMENTS</a></li>
        <li><img class="listCircle" src="./images/white-circle.svg" /><a href="pages/grilleDesProfs.html" class="button">ENSEIGNANTS</a></li>
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
                <div id="et-menu-title"><a class="button-back" href="index.html"><</a>` +
      menuTitle +
      `</div> 
                <div id="et-menu-contenu-container">
                    <div id="et-menu-contenu">
                        <div id="et-menu-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div id="et-menu-image" class="color-bg"><img src="" alt=""></div>
                    </div>
                    <div class="et-nav">
                        <img class="metro-nav" src="./images/ligne-metro-menu_1.svg"/>
                        <ul id="et-liensutiles-liste">
                        ` +
      listType +
      `
                        </ul>
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

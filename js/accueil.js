(function () {
  let btnMenuNvEtud = document.querySelector(
    "#position-container-etudiants-nouveaux"
  );

  let btnMenuEtudActu = document.querySelector(
    "#position-container-etudiants-actuels"
  );

  let etNouvListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-et">GRILLE DE CHEMINEMENTS</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">VIE ÉTUDIANTE</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-et">STAGES</a></div></li>
    `;

  let etActuListe = `
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-et">GRILLE DE CHEMINEMENTS</a></div></li>
        <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleDesProfs.php" class="button-menu-et">ENSEIGNANTS</a></div></li>
    `;

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
})();

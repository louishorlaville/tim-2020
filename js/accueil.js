(function () {
  let btnMenuNvEtud = document.querySelector(
    "#position-container-etudiants-nouveaux"
  );

  let btnMenuEtudActu = document.querySelector(
    "#position-container-etudiants-actuels"
  );

  let logoContainer = document.querySelector(".containerLogoContent");

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
})();

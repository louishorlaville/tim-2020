<?php 
    $page = "accueil";
    require("inclusions/hautDePage.php");
?>
<div id="contenu-principal">
    <div id="title">
        <div class="containerLogoContent">
            <div class="containerLogo">
                <img class="logo" src="images/svg/logo.svg" alt="logo">
                <div id="cercle-cap-N" class="cercle-cap-logo"></div>
                <div id="cercle-cap-T" class="cercle-cap-logo"></div>
                <div id="cercle-cap-I" class="cercle-cap-logo"></div> 
                <div class="logo-cercle-border"><div class="logo-cercle color-1"></div></div>
                <div class="cercle-n-border"><div class="cercle-n color-2"></div></div>   
                <div class="cercle-i-border"><div class="cercle-i color-5"></div></div>
                <img src="images/svg/logo/OInsideLogo.svg" alt="" class="color-svg-6" id="logo-o">   
                <img src="images/svg/logo/UInsideLogo.svg" alt="" class="color-svg-6" id="logo-u">   
            </div>
           
            
            <div class="position-container-etudiants" id="position-container-etudiants-nouveaux"><div class="separateur-etudiants mask-ligne-etudiants-nouveaux"><div id="container-etudiants-nouveaux" class="container-etudiants color-1 mask-etudiant"> <div class="color-1"></div> <div class="titreDivEtud" id="et-nouveaux-title">NOUVEAUX ÉTUDIANTS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div>
            <div class="position-container-etudiants" id="position-container-etudiants-actuels"><div class="separateur-etudiants mask-ligne-etudiants-actuels"><div id="container-etudiants-actuels" class="container-etudiants color-2 mask-etudiant"> <div class="color-2"></div> <div class="titreDivEtud" id="et-actuels-title">ÉTUDIANTS ACTUELS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div>
            
            <!-- ÉTUDIANTS MOBILE -->
            <div class="container-boites-menu-etudiants-mobile">
                <div class="container-etudiant-mobile" id="container-etudiant-mobile-nouveaux">
                    <div class="titre-etudiant-mobile"><div class="texte-titre-etudiant-mobile"><a class="bigger-titre-menu-etudiant-mobile">NOUVEAUX</a> ÉTUDIANTS</div></div>
                    <div class="container-menu-etudiant-mobile">
                    <div class="titre-menu-etudiant-mobile"><p class="texte-titre-menu-etudiant-mobile">Menu</p></div>
                        <ul class="liste-menu-etudiant-mobile">
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-etudiant-mobile">GRILLE DE CHEMINEMENTS</a></div></li>
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-etudiant-mobile">VIE ÉTUDIANTE</a></div></li>
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="#" class="button-menu-etudiant-mobile">STAGES</a></div></li>
                        </ul>
                    </div>
                </div>
                <div class="container-separateur-etudiant-mobile">
                    <img src="images/svg/blackPlus.svg" id="plus-separateur-etudiant-mobile" alt="">
                    <div id="ligne-separateur-etudiant-mobile">&#10240;</div>
                </div>
                <div class="container-etudiant-mobile" id="container-etudiant-mobile-actuel">
                    <div class="titre-etudiant-mobile"><div class="texte-titre-etudiant-mobile">ÉTUDIANTS <a class="bigger-titre-menu-etudiant-mobile">ACTUELS</a> </div></div>
                    <div class="container-menu-etudiant-mobile">
                    <div class="titre-menu-etudiant-mobile"><p class="texte-titre-menu-etudiant-mobile">Menu</p></div>
                        <ul class="liste-menu-etudiant-mobile">
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-etudiant-mobile">GRILLE DE CHEMINEMENTS</a></div></li>
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="./images/svg/whiteCircle.svg" /><a href="pages/grilleCheminement.php" class="button-menu-etudiant-mobile">ENSEIGNANTS</a></div></li>
                            <li><div class="position-bouton-menu-et"><img class="list-circle" src="" /><a href="pages/grilleCheminement.php" class="button-menu-etudiant-mobile"></a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- FIN ETUDIANTS MOBILE -->
        </div>
    </div>
</div>

<!-- SOCIALS ACCUEIL-->
<div class="container-socials">
    <div class="social-elt" id="social-link-instagram">
        <a href="#"><img src="./images/svg/socials/logoInstagram.svg" alt="Page Instagram du programme" class="social-icon .color-svg-1"></a>
    </div>
    <div class="social-elt" id="social-link-facebook">
        <a href="#"><img src="./images/svg/socials/logoFacebook.svg" alt="Page Facebook du programme" class="social-icon .color-svg-1"></a>
    </div>
    <div class="social-elt" id="social-link-discord">
        <a href="#"><img src="./images/svg/socials/logoDiscord.svg" alt="Serveur discord du programme" class="social-icon .color-svg-1"></a>
    </div>
</div>

<?php 
    require("inclusions/piedDePage.php");
?>



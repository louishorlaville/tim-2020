<?php 
    $page = "accueil";
    require("inclusions/hautDePage.php");
?>
<div id="contenu-principal">
    <div id="title">
        <div class="containerLogoContent">
            <div class="containerLogo">
                <img class="logo" src="images/svg/logo.svg" alt="logo">
                <div id="plus-cap-N" class="plus-cap-logo"><img src="./images/svg/blackPlus.svg" alt=""></div>
                <div id="plus-cap-T" class="plus-cap-logo"><img src="./images/svg/blackPlus.svg" alt=""></div>
                <div id="cercle-cap-T" class="cercle-cap-logo"><img src="./images/svg/blackCircle.svg" alt=""></div>
                <div id="cercle-cap-I" class="cercle-cap-logo"><img src="./images/svg/blackCircle.svg" alt=""></div> 
                <div class="logo-cercle-container">
                    <div class="logo-cercle-container-border">
                        <div class="logo-cercle color-1">
                            <img id="logo-svg-cercle" src="images/svg/logoTim.svg" alt="Logo Départemental">
                        </div>
                        <div class="logo-cercle-border"></div>
                    </div>
                </div>
                <div class="cercle-n-border"><div class="cercle-n color-2"></div></div>   
                <div class="cercle-i-border"><div class="cercle-i color-3"></div></div>
                <img src="images/svg/logo/OInsideLogo.svg" alt="" class="color-svg-3" id="logo-o">   
                <img src="images/svg/logo/UInsideLogo.svg" alt="" class="color-svg-3" id="logo-u">   
            </div>
           
            <div class="container-menu-accueil" id="container-menu-accueil-1">
                <a href="pages/grilleCheminement.php">
                    <div class="boite-bouton-menu color-2" id="bouton-menu-cours">
                        <p>COURS</p>
                        <div class="hover-menu-accueil color-bg"></div>
                    </div>
                </a>
                <div class="separateur-menu-accueil color-bars"></div>
                <a href="pages/grilleDesProfs.php">
                    <div class="boite-bouton-menu color-2" id="bouton-menu-cours">
                        <p>PROFESSEURS</p>
                        <div class="hover-menu-accueil color-bg"></div>
                    </div>
                </a>
            </div>
            <div class="container-menu-accueil" id="container-menu-accueil-2">
                <a href="pages/stages.php">
                    <div class="boite-bouton-menu color-1" id="bouton-menu-cours">
                        <p>STAGES</p>
                        <div class="hover-menu-accueil color-bg"></div>
                    </div>
                </a>
                <div class="separateur-menu-accueil color-bars"></div>
                <a href="pages/grilleCheminement.php">
                    <div class="boite-bouton-menu color-1" id="bouton-menu-cours">
                        <p>VIE ÉTUDIANTE</p>
                        <div class="hover-menu-accueil color-bg"></div>
                    </div>
                </a>
            </div>            
            <!-- <div class="position-container-etudiants" id="position-container-etudiants-nouveaux"><div class="separateur-etudiants mask-ligne-etudiants-nouveaux"><div id="container-etudiants-nouveaux" class="container-etudiants color-1 mask-etudiant"> <div class="color-1"></div> <div class="titreDivEtud" id="et-nouveaux-title">NOUVEAUX ÉTUDIANTS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div>
            <div class="position-container-etudiants" id="position-container-etudiants-actuels"><div class="separateur-etudiants mask-ligne-etudiants-actuels"><div id="container-etudiants-actuels" class="container-etudiants color-2 mask-etudiant"> <div class="color-2"></div> <div class="titreDivEtud" id="et-actuels-title">ÉTUDIANTS ACTUELS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div> -->
            
            <!-- ÉTUDIANTS MOBILE -->
            <div class="container-menu-accueil-mobile-display">
                <div class="container-menu-accueil-mobile" id="container-menu-accueil-mobile-1">
                    <a href="pages/grilleCheminement.php">
                        <div class="boite-bouton-menu color-2" id="bouton-menu-cours">
                            <p>COURS</p>
                            <div class="hover-menu-accueil color-bg"></div>
                        </div>
                    </a>
                    <div class="separateur-menu-accueil color-bars"></div>
                    <a href="pages/grilleCheminement.php">
                        <div class="boite-bouton-menu color-2" id="bouton-menu-cours">
                            <p>PROFESSEURS</p>
                            <div class="hover-menu-accueil color-bg"></div>
                        </div>
                    </a>
                </div>
                <div class="container-menu-accueil-mobile" d="container-menu-accueil-mobile-2">
                    <a href="pages/grilleCheminement.php">
                        <div class="boite-bouton-menu color-1" id="bouton-menu-cours">
                            <p>STAGES</p>
                            <div class="hover-menu-accueil color-bg"></div>
                        </div>
                    </a>
                    <div class="separateur-menu-accueil color-bars"></div>
                    <a href="pages/grilleCheminement.php">
                        <div class="boite-bouton-menu color-1" id="bouton-menu-cours">
                            <p>VIE ÉTUDIANTE</p>
                            <div class="hover-menu-accueil color-bg"></div>
                        </div>
                    </a>
                </div> 
            </div>
            <!-- FIN ETUDIANTS MOBILE -->
        </div>
    </div>
</div>

<!-- SOCIALS ACCUEIL-->
<div class="container-socials">
    <div class="social-elt" id="social-link-instagram">
        <a href="#" target="_blank"><img src="./images/svg/socials/logoInstagram.svg" alt="Page Instagram du programme" class="social-icon .color-svg-1"></a>
    </div>
    <div class="social-elt" id="social-link-facebook">
        <a href="#" target="_blank"><img src="./images/svg/socials/logoFacebook.svg" alt="Page Facebook du programme" class="social-icon .color-svg-1"></a>
    </div>
    <div class="social-elt" id="social-link-discord">
        <a href="#" target="_blank"><img src="./images/svg/socials/logoDiscord.svg" alt="Serveur discord du programme" class="social-icon .color-svg-1"></a>
    </div>
</div>

<?php 
    require("inclusions/piedDePage.php");
?>

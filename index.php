<?php 
    $page = "accueil";
    require("inclusions/hautDePage.php");
?>
</div>
<div id="contenu-principal">
    <div id="title">
        <div class="containerLogo">
            <div class=logo-cercle-border><div class="logo-cercle color-1"></div></div>
            <div class=cercle-n-border><div class="cercle-n color-2"></div></div>
            <img class="logo" src="images/svg/logo.svg" alt="logo">
            <div id="cercle-cap-N" class="cercle-cap-logo"></div>
            <div id="cercle-cap-T" class="cercle-cap-logo"></div>
            <div id="cercle-cap-I" class="cercle-cap-logo"></div>
            <div class="position-container-etudiants" id="position-container-etudiants-nouveaux"><div class="separateur-etudiants mask-ligne-etudiants-nouveaux"><div id="container-etudiants-nouveaux" class="container-etudiants color-1 mask-etudiant"> <div class="color-1"></div> <div class="titreDivEtud" id="et-nouveaux-title">NOUVEAUX ÉTUDIANTS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div>
            <div class="position-container-etudiants" id="position-container-etudiants-actuels"><div class="separateur-etudiants mask-ligne-etudiants-actuels"><div id="container-etudiants-actuels" class="container-etudiants color-2 mask-etudiant"> <div class="color-2"></div> <div class="titreDivEtud" id="et-actuels-title">ÉTUDIANTS ACTUELS</div><a href="#" class="button cliqueAccueil">CLIQUEZ-ICI!</a></div></div></div>
        </div>
    </div>
</div>

<?php 
    require("inclusions/piedDePage.php");
?>


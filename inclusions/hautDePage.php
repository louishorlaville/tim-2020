<?php 
    $meta = [
        "accueil" =>  [
            "title" =>  "Accueil | TIM",
            "titrePage" => ""
        ],
        "cheminement" =>  [
            "title" =>  "Grille de chemninement | TIM",
            "titrePage" => "GRILLE DE CHEMINEMENT"
        ],
        "profilCours" =>  [
            "title" =>  "Profil de cours | TIM",
            "titrePage" => ""
        ],
        "profs" =>  [
            "title" =>  "Professeurs | TIM",
            "titrePage" => "NOS PROFESSEURS"
        ],
        "stages" =>  [
            "title" =>  "Stages | TIM",
            "titrePage" => "LES STAGES DE NOS FINISSANTS"
        ],
        "evenements" =>  [
            "title" =>  "Évènements | TIM",
            "titrePage" => "VIE ÉTUDIANTE"

        ],
    ]
    
    // ($page!="accueil")? '<link rel="stylesheet" href="./css/'.$page.'.css">' : "";
?>

<!DOCTYPE html>
<html>
<head>
    <title><?= $meta[$page]["title"]; ?></title>
    <?=($page!="accueil")? '<link rel="stylesheet" href="../css/'.$page.'.css">' : "" ?>
    <?=($page=="accueil")? '<link rel="stylesheet" href="   hamburger/dist/hamburgers.css">' : '<link rel="stylesheet" href="../hamburger/dist/hamburgers.css">'?>
    <link rel="stylesheet" href="<?=($page=="accueil")? "css/style.css" :"../css/style.css" ?>">
    <meta charset="UTF-8" user-scalable=no>
    <meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>
<div id="background-shapes">
    <div class="background-shape color-bg" id="background-shape-left"></div>
    <img id="bck-shape-1" src="./images/svg/blackCircle.svg" alt="" class="background-smallshape background-circle color-svg-2">
    <img id="bck-shape-2" src="./images/svg/blackCircle.svg" alt="" class="background-smallshape background-circle color-svg-2">
    <img id="bck-shape-3" src="./images/svg/blackPlus.svg" alt="" class="background-smallshape background-plus color-svg-1">
    <img id="bck-shape-4" src="./images/svg/blackPlus.svg" alt="" class="background-smallshape background-plus color-svg-1">
</div>

<div class="animation-area">
    <!-- <ul class="box-area">
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
    </ul> -->
</div>

<div class="headerContainer">
    <div class="container-header-mobile">
        <div id="logo-header-mobile">
            <a href=<?=($page=="accueil")?"./index.php":"../index.php"?>><img id="img-logo-header-mobile" src=<?= ($page=="accueil")?"./images/img/logoTim.png":"../images/img/logoTim.png"?> alt="Logo Tim"/></a>
        </div>
        <div class="container-icon-burger">
            <button id="bouton-burger" class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <div class="box-container-menu-burger hide-burger">
            <div class="box-border-menu-burger ">
                <div class="container-menu-burger">
                    <div class="elt-menu-burger" id="burger-cours">
                        <a href=<?=($page=="accueil")?"./index.php#container-etudiant-mobile-actuel":"../index.php#container-etudiant-mobile-actuel"?>>
                            Cours 
                            <div class="arrow-burger">&#8250;</div>
                        </a>
                    </div>
                    <div class="elt-menu-burger" id="burger-profs">
                        <a href=<?=($page=="accueil")?"./index.php#container-etudiant-mobile-nouveaux":"../index.php#container-etudiant-mobile-nouveaux"?>>
                            Professeurs 
                            <div class="arrow-burger">&#8250;</div>
                        </a>
                    </div>
                    <div class="elt-menu-burger" id="burger-stages">
                        <a href=<?=($page=="accueil")?"./index.php#container-etudiant-mobile-nouveaux":"../index.php#container-etudiant-mobile-nouveaux"?>>
                            Stages 
                            <div class="arrow-burger">&#8250;</div>
                        </a>
                    </div>
                    <div class="elt-menu-burger" id="burger-vie">
                        <a href=<?=($page=="accueil")?"./index.php#container-etudiant-mobile-nouveaux":"../index.php#container-etudiant-mobile-nouveaux"?>>
                            Vie étudiante 
                            <div class="arrow-burger">&#8250;</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
    if($page=="accueil"):
    ?>
        <div class="header-desktop header color-bars"> </div>
    <?php 
        else:
    ?>
    <div class="header-desktop displayRowHeader">
        <div id="logoMenuAccueilContainer">
        <a href="../index.php"><img src="../images/svg/header/logoMenuHeader.svg" alt="Logo retour accueil" id="logoMenuAccueil" href="../index.php">
        </div>
        <div id="menuHeaderContainer">
            <a href="stages.php" id="stages" class="elt-menu-header <?= ($page=="stages")? "menu-actif":"menu-inactif"?>"><div class="border-elt-menu-header">Stages</div></a>
            <a href="grilleCheminement.php" id="cheminement" class="elt-menu-header <?= ($page=="cheminement")? "menu-actif":"menu-inactif"?>"><div class="border-elt-menu-header">Cours</div></a>
            <a href="evenements.php" id="evenements" class="elt-menu-header <?= ($page=="evenements")? "menu-actif":"menu-inactif"?>"><div class="border-elt-menu-header">Vie étudiante</div></a>
            <a href="grilleDesProfs.php" id="profs" class="elt-menu-header <?= ($page=="profs"||$page=="profilCours")? "menu-actif":"menu-inactif"?>"><div class="border-elt-menu-header">Professeurs</div></a>
        </div>
    </div>
</div>
<?php if($page!="profilCours"): ?>
<div id="contenu-principal">
    <div class="container-titre">
        <div class="contenu-titre">
            <div class="fleche-page-precedente"><a class="" href="../index.php">&#8249;</a></div>
            <div class="titre-page" id="titre-page-stages"><?= $meta[$page]["titrePage"];?></div>
        </div>
    </div>
<?php 
endif;
endif; 
?>


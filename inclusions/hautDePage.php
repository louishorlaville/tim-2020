<?php 
    $meta = [
        "accueil" =>  [
            "titre" =>  "Accueil | TIM"
        ],
        "cheminement" =>  [
            "titre" =>  "Grille de chemninement | TIM"
        ],
        "profileCours" =>  [
            "titre" =>  "Profile de cours | TIM"
        ],
        "profs" =>  [
            "titre" =>  "Professeurs | TIM"
        ],
        "stages" =>  [
            "titre" =>  "Stages | TIM"
        ],
        "evenements" =>  [
            "titre" =>  "Évènements | TIM"
        ],
    ]
    // ($page!="accueil")? '<link rel="stylesheet" href="./css/'.$page.'.css">' : "";
?>

<!DOCTYPE html>
<html>
<head>
    <title><?= $meta[$page]["titre"]; ?></title>
    <?=($page!="accueil")? '<link rel="stylesheet" href="../css/'.$page.'.css">' : "" ?>
    <link rel="stylesheet" href="<?=($page=="accueil")? "css/style.css" :"../css/style.css" ?>">
    <meta charset="UTF-8" user-scalable=no>
    <meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>
<div id="background-shapes">
    <div class="background-shape color-bg-2" id="background-shape-left"></div>
    <div class="background-shape color-bg-2" id="background-shape-right"></div>
</div>

<div class="animation-area">
    <ul class="box-area">
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>

    </ul>
</div>

    
<div class="headerContainer">
    <?php
    if($page=="accueil"):
    ?>
        <div class="header color-bars"> </div>
    <?php 
        else:
    ?>
    <div class="displayRowHeader">
        <div id="logoMenuAccueilContainer">
        <a href="../index.php"><img src="../images/svg/header/logoMenuHeader.svg" alt="Logo retour accueil" id="logoMenuAccueil" href="../index.php">
        </div>
        <div id="menuHeaderContainer">
            <a href="#" id="menuHeaderNouvEtud" class="eltMenuHeader">
                <img src="../images/svg/header/underlineHeader1.svg" alt="" id="menuHeaderUnderline1" class="underLineHeader">
                Nouveaux Étudiants
            </a>
            <a href="#" id="menuHeaderActuEtud" class="eltMenuHeader">
                <img src="../images/svg/header/underlineHeader2.svg" alt="" id="menuHeaderUnderline2" class="underLineHeader">
                Étudiants Actuels
            </a>
        </div>
    </div>
</div>
<?php endif; ?>


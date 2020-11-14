<?php 
    $meta = [
        "accueil" =>  [
            "titre" =>  "Accueil | TIM"
        ],
        "grilleCheminement" =>  [
            "titre" =>  "Grille de chemninement | TIM"
        ],
        "profileCours" =>  [
            "titre" =>  "Profile de cours | TIM"
        ],
        "tableauProf" =>  [
            "titre" =>  "Professeurs | TIM"
        ],
        "stages" =>  [
            "titre" =>  "Stages | TIM"
        ],
        "evenements" =>  [
            "titre" =>  "Évènements | TIM"
        ],
    ]
?>

<!DOCTYPE html>
<html>
<head>
    <title><?= $meta[$page]["titre"]; ?></title>
    <link rel="stylesheet" href="css/style.css">
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
<?php
if($page!="accueil")
?>
    <div class="headerContainer">
        <div id="logoMenuAccueilContainer">
            <img src="./images/svg/header/logoMenuHeder.svg" alt="Logo retour accueil" id="logoMenuAccueil">
        </div>
        <div id="menuHeaderContainer">
            <div id="menuHeaderNouvEtud" class="eltMenuHeader">
                <img src="./images/svg/header/underlineHeader1.svg" alt="" id="menuHeaderUnderline1" class="underLineHeader">
                Nouveaux Étudiants
            </div>
            <div id="menuHeaderActuEtud" class="eltMenuHeader">
            <img src="./images/svg/header/underlineHeader2.svg" alt="" id="menuHeaderUnderline2" class="underlineHeader">
                Étudiants Actuels
            </div>
        </div>
    </div>
<?php endif; ?>


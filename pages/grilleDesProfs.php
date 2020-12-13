<?php 
    $page = "profs";
    require("../inclusions/hautDePage.php");
    require("../inclusions/fonctions/enleverAccents.php");

    $jsonProfs= file_get_contents('../data/profs.json'); //Aller chercher les datas
    $dataProfs = array_values(json_decode($jsonProfs, true)); // Decoder le JSON en tableau associatif
?>


<div id="container-boite">
    <div id="opacity-boite"></div>
    <div id="boite">
        <div id="container-out-boite"><div id="out-boite"></div></div>
        <div id="contenu-boite">
            <div id="header-boite">
                <h1 id="container-nom-boite">
                    <div id="nom-boite">Camille Semaan</div>
                    <div id="date-prof-boite"><p>Enseignant à Maisonneuve</p><p>depuis <span id="annee-boite"></span></p></div>
                </h1>    
                <img id="photo-boite" src="../images/img/profTemp.jpg" alt="Photo prof">
            </div>
            <div id="description-boite"></div>
        </div>
    </div>
</div>

<div id="contenu-principal">  
    <div id="container-profs">
        <?php  foreach($dataProfs[0] as $datas=>$data){
            $nomArray = explode(" ", $data["nom"]);
            $prenom = unaccent(strtolower($nomArray[0]));
        ?>
            <div class="prof-<?=$data["type"]?> prof" id=<?=$prenom?> > 
                <img id="signe-<?=$prenom?>" class="icone-prof <?=($data["type"]=="prog")?"color-svg-1":"color-svg-2"?>" src="../images/svg/<?=($data["type"]=="prog")?"blackPlus.svg":"blackCircle.svg"?>">
                <div class="nom-prof color-text-1"><?=ucfirst($nomArray[0])." ".ucfirst($nomArray[1])?></div> 
            </div> 
        <?php }?>
    </div>
</div>
<script src="../js/prof.js"></script>
</div>


<?php 
    require("../inclusions/piedDePage.php");
?>

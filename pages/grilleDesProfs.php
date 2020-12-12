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
            $prenom = strtolower($nomArray[0]);
        ?>
            <div class="prof-<?=$data["type"]?> prof" id=<?=unaccent($prenom)?> > 
                <img id="signe-<?=$prenom?>" class="icone-prof" src="../images/svg/<?=($data["type"]=="prog")?"plusProf.svg":"cercleProf.svg"?>">
                <div class="nom-prof"><?=$prenom?></div> 
            </div> 
        <?php }?>

        
        
        <!-- <div class="prof-prog prof" id="dominic">
            <img id="dominic0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">Dominic</div>
        </div>
        <div class="prof-prog prof" id="manon">
            <img id="manon0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">Manon</div>
        </div>
        <div class="prof-prog prof" id="mathieu">
           <img id="mathieu0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">Mathieu</div>
        </div>
        <div class="prof-prog prof" id="david">
           <img id="david0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">David</div>
        </div>
        <div class="prof-prog prof" id="denis">
           <img id="denis0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">Denis</div>
        </div>
        <div class="prof-prog prof" id="gregory">
           <img id="gregiry0" class="icone-prof" src="../images/svg/cercleProf.svg">
            <div class="nom-prof">Gregory</div>
        </div>
        <div class="prof-design prof" id="camille">
            <img id="camille+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Camille</div>
        </div>
        <div class="prof-design prof" id="vahik">
            <img id="vahik+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Vahik</div>
        </div>
        <div class="prof-design prof" id="vincent">
            <img id="vincent+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Vincent</div>
        </div>
        <div class="prof-design prof" id="johanne">
            <img id="johanne+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Johanne</div>
        </div>
        <div class="prof-design prof" id="eddy">
            <img id="eddy+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Eddy</div>
        </div>
        <div class="prof-design prof" id="caroline">
            <img id="caroline+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Caroline</div>
        </div>
        <div class="prof-design prof" id="ahmed">
            <img id="ahmed+" class="icone-prof" src="../images/svg/plusProf.svg">
            <div class="nom-prof">Ahmed</div>
        </div> -->
    </div>
        
    
  
  


    </div>

</footer>
<script src="../js/prof.js"></script>

</div>


<?php 
    require("../inclusions/piedDePage.php");
?>

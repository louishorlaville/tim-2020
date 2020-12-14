<?php 
    $page = "profilCours";
    require("../inclusions/hautDePage.php");
?>

    
    <!-- Fin Header -->
	<main class="grid-container">
	    <section id="titre-cours" class="color-text-1">
          <a href="../index.php" class="retour color-text-1">&lt;</a>
	        <h3 id="code-cours"></h3>
	        <h1 id="nom-cours"></h1>
	    </section>
    <!-- Fin de titre-cours	  -->
	    <section id="description">
	        <p id="class-desc"></p>

        </section>
    <!--  Find de desc  -->
        <section class ="color-text-1" id="details-cours">
            <ul>
                <li class="subtitle-1">Nombre d'heures</li>
                <li id="class-hrs">heures</li>
                <li class="subtitle-1">Pondération</li>
                <li id="class-pond"></li>
            </ul>
	    </section>
    <!-- fin de details	    -->
        <section id="categories">
            <li id="cercle-envpro" class="icone-categorie" style="display:none;">
                <span class="cercle color-1"></span>
                <p class="nomCat"></p>
            </li>
            <li id="cercle-prog" class="icone-categorie" style="display:none;">
                <span class="cercle color-2"></span>
                <p class="nomCat"></p>
            </li>
            <li id="cercle-cratn" class="icone-categorie" style="display:none;">
                <span class="cercle color-3"></span>
                <p class="nomCat"></p>
            </li>
            <li id="cercle-integrtn" class="icone-categorie" style="display:none;">
                <span class="cercle color-4"></span>
                <p class="nomCat"></p>
            </li>
            <li id="cercle-conceptn" class="icone-categorie" style="display:none;">
                <span class="cercle color-5"></span>
                <p class="nomCat"></p>
            </li>
        </section>
	</main>

    <script src="../js/cours.js" type="text/javascript"></script> 

    <?php
    echo "<script type='text/javascript'>getClassJSON(".htmlspecialchars($_GET["sessionid"]).", ".htmlspecialchars($_GET["classid"]).")</script>";
    ?>
</body>
<?php 
    require("../inclusions/piedDePage.php");
?>

<?php 
    $page = "profileCours";
    require("../inclusions/hautDePage.php");
?>

    
    <!-- Fin Header -->
	<main class="grid-container">
	    <section id="titre-cours" class="color-text-1">
          <a href="../index.php" class="retour color-text-1">&lt;</a>
	        <h3 id="code-cours">TIM-404</h3>
	        <h1 id="nom-cours">Cours d'introduction à la programmation</h1>
	    </section>
    <!-- Fin de titre-cours	  -->
	    <section id="description">
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sunt voluptatem voluptates, aut voluptatum! Nobis accusamus possimus voluptate veniam ratione natus in, cumque dolor earum! Odit ut eaque quas. Doloribus iste natus ipsam at illo quod consequuntur quas quisquam magni.</p>
        </section>
    <!--  Find de desc  -->
        <section id="details-cours">
	    <ul>
            <li class="subtitle-1">Nombre d'heures</li>
            <li>60 heures</li>
            <li class="subtitle-1">Pondération</li>
            <li>2-3-2</li>
	    </ul>
	    </section>
    <!-- fin de details	    -->
    <section id="categories">
        <li class="icone-categorie">
            <span class="cercle color-1"></span>
            <p class="nomCat"></p>
        </li>
        <li class="icone-categorie">
            <span class="cercle color-2"></span>
            <p class="nomCat"></p>
        </li>
       <li class="icone-categorie">
           <span class="cercle color-3"></span>
           <p class="nomCat"></p>
       </li>
       <li class="icone-categorie">
           <span class="cercle color-4"></span>
           <p class="nomCat"></p>
       </li>
       <li class="icone-categorie">
           <span class="cercle color-5"></span>
           <p class="nomCat"></p>
       </li>
    </section>
	 
	</main>
</body>
<?php 
    require("../inclusions/piedDePage.php");
?>

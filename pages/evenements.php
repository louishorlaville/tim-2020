<?php 
    $page = "evenements";
    require("../inclusions/hautDePage.php");
?>

    
	<!-- Fin Header -->
	<main>
		<section id="stadeConteneurPrincipale">
			<div id="casesConteneur">
				<img src="../images/svg/stade/stadeBase.svg" alt="" id="baseStade">
				<img src="../images/svg/stade/stadeCase1.svg" alt="" class="casesStade idle">
				<img src="../images/svg/stade/stadeCase2.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase3.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase4.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase5.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase6.svg" alt="" class="casesStade">
			</div>		    
		</section>
		<section id="infoEvenement" class="color-bars border-1">
			<h1 id="titreEvenement">Nom de l'événement</h1>
			<h5 id="dateEvenement">04/11/2019</h5>
			<p id="descEvenement">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, at officiis.
				 Fugiat officia quas aliquid tempora iste eaque quibusdam cupiditate? 
				 Lorem ipsum dolor sit amet.</p>
			<div id="carousel">
				<span>&lt;</span>
				<div id="cadreImage">
					<img src="../images/img/profTemp.jpg" alt="Photo pas disponible" id="imageEvenement">
				</div>
				<span>&gt;</span>
			</div>
		</section>
	</main>
	<script src="../js/evenement.js"></script>
</body>

<?php 
    require("../inclusions/piedDePage.php");
?>

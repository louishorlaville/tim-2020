<?php 
    $page = "evenements";
    require("../inclusions/hautDePage.php");
?>

    
	<!-- Fin Header -->
	<main>
		<section id="stadeContainer">
			<img src="../images/svg/stade/stadeBase.svg" alt="" id="baseStade">
			<div id="casesContainer">
				<img src="../images/svg/stade/stadeCase1.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase2.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase3.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase4.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase5.svg" alt="" class="casesStade">
				<img src="../images/svg/stade/stadeCase6.svg" alt="" class="casesStade">
			</div>		    
		</section>
		<section id="infoEvenement">
			<h1 id="titreEvenenment">Nom de l'événement</h1>
			<h5 id="dateEvenement">04/11/2019</h5>
			<p>lorem</p>
			<div id="carousel">
				<span>&lt;</span>
				<div id="cadreImage">
					<img src="../images/img/profTemp.jpg" alt="Photo pas disponible">
				</div>
				
				<span>&gt;</span>
			</div>
		</section>
	</main>
</body>

<?php 
    require("../inclusions/piedDePage.php");
?>
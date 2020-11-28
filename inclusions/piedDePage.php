<footer class="footer color-bars">
    <div class="credits" >
        <p>Site Web créé par:</p>
        <p>Gabriel Alvarez, Louis Horlaville</p>
        <p>Thomas Lorenzo, Kevin Ponce</p>
    </div>
    <div class="college">
        <a id="liens-college-footer" href="https://www.cmaisonneuve.qc.ca/" target="_blank" > 
            <?php if($page!="accueil"): ?>
                <img src="./images/svg/logoTim.svg" alt="Logo TIM">
            <?php endif; ?>
            <p>Collège de Maisonneuve</p>
        </a>
    </div>
    <div class="contacts" >
        <p>3 800, rue Sherbrooke Est Montréal (Québec)</p><p> H1X 2A2 | 514 254-7131 - Copyright © 2020 -</p>
        <p>Techniques d'Intégration Multimédia,</p><p>  Tous droits réservés.</p>
    </div>
</footer>
</body>

<script src="js/commun.js" type="text/javascript"></script> 

<?php if($page=="accueil"): ?>

    <script src="js/accueil.js" type="text/javascript"></script> 
<?php endif;?>

</html> 


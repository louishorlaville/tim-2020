(function(){
    let btnMenuNvEtud = document.querySelector("#container-etudiants-nouveaux");
    let btnMenuEtudActu = document.querySelector("#container-etudiants-actuels");
    let title = document.querySelector("#title");
    let logo = document.querySelector(".logo");

    let etNouvListe=`
        <li><a href="pages/grilleCheminement.html" class="button">COURS</a></li>
        <li><a href="#" class="button">ENSEIGNANTS</a></li>
        <li><a href="#" class="button">VIE ÉTUDIANTE</a></li>
    `;

    let etActuListe=`
        <li><a href="pages/grilleCheminement.html" class="button">COURS</a></li>
        <li><a href="#" class="button">ENSEIGNANTS</a></li>
        <li><a href="#" class="button">STAGE</a></li>
    `;

    btnMenuNvEtud.addEventListener("click", function(){
        fondu();
        setTimeout(function() { ajouterMenuEtudiant("NOUVEAUX ÉTUDIANTS", "color-1", etNouvListe); }, 0500);
    });

    btnMenuEtudActu.addEventListener("click", function(){
        fondu();
        setTimeout(function() { ajouterMenuEtudiant("ÉTUDIANTS ACTUELS","color-2", etActuListe); }, 0500);
    });

    function fondu()
    {
        document.querySelector("#contenu-principal").classList.remove("fadein");
        document.querySelector("#contenu-principal").classList.add("fadeout");
    }

    function ajouterMenuEtudiant(menuTitle, menuType, listType)
    {
        document.querySelector("#contenu-principal").classList.remove("fadeout");
        document.querySelector("#contenu-principal").innerHTML = `
        <div id="container-etudiants-fullscreen" class="container-etudiants `+ menuType +`"> 
            <div id="container-etudiants-contenu">
                <div class="color-2"></div> 
                <div id="et-menu-title">`+menuTitle+`</div> 
                <div class="separateur-etudiants"></div> 
                <div id="et-menu-contenu">
                    <div id="et-menu-desc"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                    <div id="et-menu-image" class="color-bg"><img src="" alt=""></div>
                </div>
                <div class="separateur-etudiants"></div> 
                <ul id="et-liensutiles-liste">
                `+listType+`
                </ul>
            </div>
        </div>
        `; 
    }

}());
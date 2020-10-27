(function(){
    let btnMenuNvEtud = document.querySelector("#container-etudiants-nouveaux");
    let btnMenuEtudActu = document.querySelector("#container-etudiants-actuels");
    let title = document.querySelector("#title");
    let logo = document.querySelector(".logo");

    btnMenuNvEtud.addEventListener("click", function(){
        this.classList.add("container-etudiants-animate");
        title.classList.add("invisible");
    });

    btnMenuEtudActu.addEventListener("click", function(){
        this.classList.add("container-etudiants-animate");
        title.classList.add("invisible");
    });

}());
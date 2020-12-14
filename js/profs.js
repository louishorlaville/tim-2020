let profsData;
getClassesJSON();

//Aller chercher les datas des profs
function getClassesJSON() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      profsData = JSON.parse(this.responseText);
      console.log(profsData);
      console.log("loaded profs data");
    }
  };
  xmlhttp.open("GET", "../data/profs.json", true);
  xmlhttp.send();
}

let profs = document.querySelectorAll(".prof");
let containerBoiteInfos = document.querySelector("#container-boite");
let boiteInfos = document.querySelector("#contenu-boite");
let descriptionBoite = document.querySelector("#description-boite");

//Afficher les infos du prof choisi sur la boite d'apercu
for (let x = 0; x < profs.length; x++) {
  profs[x].addEventListener("click", function () {
    containerBoiteInfos.style.display = "block";
    containerBoiteInfos.style.opacity = "0";
    containerBoiteInfos.style.opacity = "1";
    //Insérer nom
    boiteInfos.children[0].children[0].children[0].innerHTML = profsData.profs[
      x
    ].nom.toUpperCase();
    //Insérer année
    boiteInfos.children[0].children[0].children[1].children[1].children[0].innerHTML =
      profsData.profs[x].annee;
    //Insérer la photo
    boiteInfos.children[0].children[1].src =
      "../images/img/profs/" + profsData.profs[x].photo;
    //S'assurer que aucune description n'est affiché
    boiteInfos.children[1].innerHTML = "";
    //Créer une balise P pour chaque élément de la description d'un prof
    if (profsData.profs[x].description.length != 0) {
      profsData.profs[x].description.forEach((element) => {
        let p = boiteInfos.children[1].appendChild(document.createElement("p"));
        p.innerHTML = element;

        //Changer un peu le style des éléments pour la description de Ahmed
        if (
          profsData.profs[x].nom == "Ahmed Boudjani" &&
          boiteInfos.children[1].children.length > 1
        ) {
          p.classList.add("liste-description-boite");
        }
      });
    }
  });
}

//Enlever la boite d'apercu
document.getElementById("out-boite").addEventListener("click", function () {
  containerBoiteInfos.style.opacity = "0";
  containerBoiteInfos.style.display = "none";
});

// Animation hover des signes des profs
profs.forEach((element) => {
  element.addEventListener("mouseover", function () {
    element.children[0].classList.remove("profLeave");
    element.children[0].classList.add("profHover");
  });
  element.addEventListener("mouseleave", function () {
    element.children[0].classList.remove("profHover");
    element.children[0].classList.add("profLeave");
  });
});

let stagesData;
getStagesJSON();

//Aller chercher les datas des profs
function getStagesJSON() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      stagesData = JSON.parse(this.responseText);
      console.log(stagesData);
      console.log("loaded stages data");
    }
  };
  xmlhttp.open("GET", "../data/stages.json", true);
  xmlhttp.send();
}

let stages = document.querySelectorAll(".window-building");
let containerBoiteInfos = document.querySelector("#container-boite");
let boiteInfos = document.querySelector("#contenu-boite");
let descriptionBoite = document.querySelector("#description-boite");

//Afficher les infos du prof choisi sur la boite d'apercu
for (let x = 0; x < stages.length; x++) {
  stages[x].addEventListener("click", function () {
    console.log(stagesData);
    containerBoiteInfos.style.display = "flex";
    //Insérer nom
    boiteInfos.children[0].children[0].children[0].innerHTML = stagesData.stages[
      x
    ].nom.toUpperCase();
    //Insérer année finissant
    boiteInfos.children[0].children[0].children[1].children[0].children[0].innerHTML =
      stagesData.stages[x].annee;
    //Insérer informations stage
    boiteInfos.children[0].children[0].children[1].children[1].children[0].innerHTML =
      stagesData.stages[x].poste;
    boiteInfos.children[0].children[0].children[1].children[1].children[1].innerHTML =
      stagesData.stages[x].compagnie;
    //Insérer la photo
    boiteInfos.children[0].children[1].src =
      "../images/img/profs/" + stagesData.stages[x].photo;
    //S'assurer qu'aucune description n'est affiché
    boiteInfos.children[1].innerHTML = "";
    //Créer une balise P pour chaque élément de la description d'un prof
    if (stagesData.stages[x].description.length != 0) {
      stagesData.stages[x].description.forEach((element) => {
        let p = boiteInfos.children[1].appendChild(document.createElement("p"));
        p.innerHTML = element;
      });
    }
  });
}

//Enlever la boite d'apercu
document.getElementById("out-boite").addEventListener("click", function () {
  containerBoiteInfos.style.display = "none";
});

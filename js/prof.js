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

//Afficher les infos du prof choisi sur la boite d'apercu
for (let x = 0; x < profs.length; x++) {
  profs[x].addEventListener("click", function () {
    console.log(profsData);
    containerBoiteInfos.style.display = "block";
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
    boiteInfos.children[2].innerHTML = "";
    //Créer une balise P pour chaque élément de la description d'un prof
    profsData.profs[x].description.forEach((element) => {
      boiteInfos.children[2].appendChild(
        document.createElement("p")
      ).innerHTML = element;
    });
  });
}

//Enlever la boite d'apercu
document.getElementById("out-boite").addEventListener("click", function () {
  containerBoiteInfos.style.display = "none";
  console.log("ok");
});

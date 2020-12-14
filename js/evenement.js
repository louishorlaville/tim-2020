let evenementData;
getClassesJSON();

//Aller chercher les data 
function getClassesJSON() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      evenementData = JSON.parse(this.responseText);
      console.log(evenementData);
      console.log("loaded evenement data");
    }
  };
  xmlhttp.open("GET", "../data/evenements.json", true);
  xmlhttp.send();
}

//Variables de la boite info
let BoiteInfos = document.querySelector("#infoEvenement");
let titre = document.querySelector("#titreEvenement");
let date = document.querySelector("#dateEvenement");
let desc = document.querySelector("#descEvenement");
let image = document.querySelector("#imageEvenement");

//Faire aparaitre la boite
//Remplir la boite avec l'info du json
for (let index = 0; index < 6; index++) {
    document.getElementsByClassName("casesStade")[index].addEventListener("click", function () {
        document.getElementById("infoEvenement").style.display = "block";

        titre.innerHTML = evenementData.evenements[index].titre.toUpperCase();
        date.innerHTML = evenementData.evenements[index].annee.toUpperCase();
        desc.innerHTML = evenementData.evenements[index].description
        image.src = "../images/img/evenements/" + evenementData.evenements[index].photo; 
    });   
}
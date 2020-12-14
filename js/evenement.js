for (let index = 0; index < 5; index++) {
    document.getElementsByClassName("casesStade")[index].addEventListener("click", function () {
        document.getElementById("infoEvenement").style.display = "block"
    });   
}

let evenementData;
getClassesJSON();

//Aller chercher les data 
function getClassesJSON() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      profsData = JSON.parse(this.responseText);
      console.log(EvenementsData);
      console.log("loaded profs data");
    }
  };
  xmlhttp.open("GET", "../data/evenements.json", true);
  xmlhttp.send();
}

let BoiteInfos = document.querySelector("#infoEvenement");
let titre = document.querySelector("#titreEvenement");
let date = document.querySelector("#dateEvenement");
let desc = document.querySelector("#descEvenement");
let image = document.querySelector("#imageEvenement")
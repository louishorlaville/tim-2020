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
let boiteInfos = document.querySelector("#boite");

//Afficher les infos du prof choisi sur la boite d'apercu
for (let x = 0; x < profs.length; x++) {
  profs[x].addEventListener("click", function () {
    console.log(profsData);
    boiteInfos.style.display = "block";
    boiteInfos.children[2].innerHTML = profsData.profs[x].nom;
    boiteInfos.children[3].innerHTML = profsData.profs[x].description;
  });
}

//Enlever la boite d'apercu
document.getElementById("out").addEventListener("click", function () {
  boiteInfos.style.display = "none";
  console.log("ok");
});

/*d.getElementById("martin").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Martin";
});

d.getElementById("dominic").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Dominic";
});

d.getElementById("manon").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Manon";
});

d.getElementById("mathieu").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Mathieu";
});

d.getElementById("david").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "David";
});

d.getElementById("denis").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Denis";
});

d.getElementById("gregory").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Gregory";
});

d.getElementById("camille").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Camille";
});

d.getElementById("vahik").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Vahik";
});

d.getElementById("eddy").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Eddy";
});

d.getElementById("caroline").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Caroline";
});

d.getElementById("ahmed").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Ahmed";
});

d.getElementById("vincent").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Vincent";
});

d.getElementById("johanne").addEventListener("click", function () {
  d.getElementById("boite").style.display = "block";
  d.getElementById("nomBoiteProf").innerHTML = "Johanne";
});*/

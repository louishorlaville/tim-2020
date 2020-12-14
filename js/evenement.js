for (let index = 0; index < 5; index++) {
    document.getElementsByClassName("casesStade")[index].addEventListener("click", function () {
        document.getElementById("infoEvenement").style.display = "block"
    });   
}
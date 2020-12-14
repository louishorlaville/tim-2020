(function () {
    let classesData;
})();


function getClassJSON(sessionid, classid)
{
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            classesData = JSON.parse(this.responseText);
            console.log(classesData);
            console.log("loaded class data");

            loadClassData(sessionid, classid);
        }
    };
    xmlhttp.open("GET", "../data/classes.json", true);
    xmlhttp.send();
}


function loadClassData(sessionid, classid)
{
    console.log(classesData);

    let classList = classesData.sessions[sessionid].classes;

    document.querySelector("#code-cours").innerHTML=classList[classid].classID;
    document.querySelector("#nom-cours").innerHTML=classList[classid].className;
    document.querySelector("#class-desc").innerHTML=classList[classid].classDesc;
    document.querySelector("#class-hrs").innerHTML=classList[classid].classHrs+` heures`;

    for(i = 0; i < classList[classid].classPond.length; i++)
    {
        if(i != 0)
        {
            document.querySelector("#class-pond").innerHTML+="-";
        }
        
        document.querySelector("#class-pond").innerHTML+=classList[classid].classPond[i];
    }

    if(innerHTML=classList[classid].classTags.includes("Environement Professionnel"))
    {
        document.querySelector("#cercle-envpro").style="display:inline-block;";
    }
    if(innerHTML=classList[classid].classTags.includes("Programmation"))
    {
        document.querySelector("#cercle-prog").style="display:inline-block;";
    }
    if(innerHTML=classList[classid].classTags.includes("Création de Médias"))
    {
        document.querySelector("#cercle-cratn").style="display:inline-block;";
    }
    if(innerHTML=classList[classid].classTags.includes("Intégration"))
    {
        document.querySelector("#cercle-integrtn").style="display:inline-block;";
    }
    if(innerHTML=classList[classid].classTags.includes("Conception"))
    {
        document.querySelector("#cercle-conceptn").style="display:inline-block;";
    }
}
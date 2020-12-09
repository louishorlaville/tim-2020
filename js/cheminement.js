(function () {
  let classesData;
  getClassesJSON();
})();


function getClassesJSON()
{
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      classesData = JSON.parse(this.responseText);
      console.log(classesData);
      console.log("loaded class data");
      loadClasses();
  }
  };
  xmlhttp.open("GET", "../data/classes.json", true);
  xmlhttp.send();
}


function loadClasses()
{
    for (x = 0; x < classesData.sessions.length; x++) 
    {
      console.log("loaded classes for session "+(x+1));
      getClasses(x);
    };
}


function getClasses(session){

  let currentClass;

  let clastList = classesData.sessions[session].classes;
  clastList = clastList.reverse();

  let tableRows = 6;

  for (i = 0; i < tableRows; i++) 
  {
    currentClass = i;

    if(clastList[currentClass] != null)
    {
      let headerColor = "color-1";

      switch(clastList[currentClass].classType) {
        case "stage":
          headerColor = "color-5";
          break;
        case "web":
          headerColor = "color-2";
          break;
        case "jeu":
          headerColor = "color-3";
          break;
        default:
          headerColor = "color-1";
      }
      
      document.querySelector("#session-row-"+(currentClass+1)).innerHTML+=`
      <th class="class-cell fadein-chem" style="animation-delay: `+((i/20)+session/4)+`s"><span class="class-header `+headerColor+`">`+clastList[currentClass].classID+`</span><div class="class-content color-bars">`+clastList[currentClass].className+`</div></th>
      `;
      //clastList[currentClass].className
    }
    else
    {
      document.querySelector("#session-row-"+(currentClass+1)).innerHTML+=`
      <th class="class-cell"><span class="class-header"></span><div class="class-content"></div></th>
      `;
    }

  };
  

  document.querySelector("#cheminement-table-mobile").innerHTML+=`
  <tr><th class="session-separator-mobile">Session `+(session+1)+`</th></tr>      
  `;

  for(i = 0; i < clastList.length; i++)
  {
    let headerColor = "color-1";

    switch(clastList[i].classType) {
      case "final":
        headerColor = "color-5";
        break;
      case "web":
        headerColor = "color-2";
        break;
      case "jeu":
        headerColor = "color-3";
        break;
      default:
        headerColor = "color-1";
    }

    document.querySelector("#cheminement-table-mobile").innerHTML+=`
    <tr><th class="class-container-mobile fadein-chem" style="animation-delay: `+((i/20)+session/4)+`s"><span class="class-header-mobile `+headerColor+`">`+clastList[i].classID+`</span><div class="class-content-mobile color-bars">`+clastList[i].className+`</div></th></tr>    
    `;
  }

}
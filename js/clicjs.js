  
/*** valeurs pour les entrees et sorties ***/
var i = 0;      /*** variable compteur entrees***/
var o = 0;      /*** variable compteur sorties***/
var ii= 0;      /*** variable compteur ecart entrées stat***/
var ou= 0;      /*** variable compteur ecart sorties stat***/
var coi = 0 ;   /*** variable compteur entrées stat***/
var coo =0 ;    /*** variable compteur sorties stat***/
var tour = 1;   /*** compteur de tours ***/ 
var sta =0;
var stb=0;
var tot =0;
var statresult = 1 ; 
var total = 0 ;
var surface = 0;
var perisecu =1 ;
var seuil = 0 ;
function Count() 
  {
    document.getElementById("inputa").innerHTML = i++ + 1;  
  }
function Countis()
  {
    document.getElementById("inputas").innerHTML = coi++ + 1;
  }
function Count_1() 
  {
    document.getElementById("outputa").innerHTML = o++ + 1;
  }
function Countos_1() 
  {
    document.getElementById("outputas").innerHTML = coo++ + 1;
  }
function ecart()
  {
    var ii = document.getElementById("inputa").innerText;
    var ou = document.getElementById("outputa").innerText;
    document.getElementById("resultat").innerHTML = ii - ou;
  }
function zero()
  {
    document.getElementById("inputa").innerHTML = 0;
    document.getElementById("outputa").innerHTML =0;
    document.getElementById("resultat").innerHTML =0;
    i = 0;
    o = 0;
  }
function garde()
  {
    var sta = document.getElementById("inputas").innerText;
    var stb = document.getElementById("outputas").innerText;
    document.getElementById("resultatsab").innerHTML =(sta - stb);
  }
function peri()
  {
    document.getElementById("uptour").innerHTML = tour++ + 1;
  }
    
/**** partie javascript statistiques **/

    function zerostat(){
    var i = 0;
    var o = 0;
    var ii= 0;
    var ou= 0;
    var coi = 0 ;
    var coo =0 ;
    var tour = 1;
    var statresult = 1 ;
    var total = 0 ;
    var sta =0;
    var stb=0;
    var tot =0;
        document.getElementById("inputa").innerHTML = 0;
        document.getElementById("outputa").innerHTML =0;
        document.getElementById("resultat").innerHTML =0;
        document.getElementById("inputas").innerHTML = 0;
	      document.getElementById("outputas").innerHTML =0;
        document.getElementById("resultatsab").innerHTML =0;    
        document.getElementById("uptour").innerHTML =1;
    }
/*** valeurs pour le seuil d'alerte ***/
/** calcul du seuil recommandé 
var  surface =0;
var perisecu = 1;
*/
function monseuil()
  {
    var surface = document.getElementById("surfacein").innerText;
    var perisecu = document.getElementById("distsecuin").innerText;
    seuil = surface / perisecu ;
    document.getElementById("leseuil").innerHTML = surface / perisecu;
  }
function getValue() 
  {
    // Sélectionner l'élément input et récupérer sa valeur 
    var input = document.getElementById("in").value;
    // Afficher la valeur
    alert("Vous avez choisi : "+ input);
  }

/**function newdate()
  {
    var d = new Date();
    d.setFullYear(2020, 11, 3);
    document.getElementById("demo").innerHTML = d;
  }*/
  /*** Horloge de param ***/
function datehor () 
{  
var d = new Date();
d.setFullYear(2020);
document.getElementById("heur").innerHTML = d;
}

function calcul()
{
  /*
  var surf = document.getElementById("surfacein").innerText;
  var peri = document.getElementById("distsecuin").innerText;
  var x = surf/peri;
  */
  x.toString();            // returns ___ from variable x
  (surf).toString(); 
  (peri).toString();        
  (surf / peri).toString();
  document.getElementById("leseuilcalcul").innerHTML= (surf/peri).toString();
}


function setCookie(cname,cvalue,exdays) {
var d = new Date();
d.setTime(d.getTime() + (exdays*24*60*60*1000));
var expires = "expires=" + d.toGMTString();
document.cookie = cname + "=" + cvalue + ";" + expires + ";path=../";
}

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
}
return "";
}
function checkCookie()
 {
    var user=getCookie("username");
    if (user != "") {
      alert("Bonjour " + user);
    } else {
       user = prompt("Nous allons Déterminer le seuil de tolerance. Merci d'entrer votre Nom : ","");
       if (user != "" && user != null) {
         setCookie("username", user, 10);
       }
    }
  }


function controle()
{
var saisie =document.getElementById("input").value;
alert("Le Seuil du Cliqueur sera avec cette valeur : "+ saisie);
}



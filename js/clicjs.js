/*** Horloge de param ***/
window.addEventListener('load',horloge);
      function horloge(){
        let d = new Date();
        document.getElementById('heure').innerHTML = d.toLocaleTimeString();
        setTimeout(horloge, 1000);
    }
    
      document.addEventListener('DOMContentLoaded', function(){
        let cache = document.getElementById('bouton');
        cache.addEventListener('click',cacheHorloge);
        document.getElementById('tog').style.display = 'block';
        function cacheHorloge(){
          let para = document.getElementById('tog');
          if(para.style.display == 'block'){
            para.style.display = 'none';
          }else{
            para.style.display = 'block';
          }
        }
      });


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
	function Count() {
        document.getElementById("inputa").innerHTML = i++ + 1;  
    }
    function Countis() {
        document.getElementById("inputas").innerHTML = coi++ + 1;
    }
	function Count_1() {
        document.getElementById("outputa").innerHTML = o++ + 1;
    }
    function Countos_1() {
        document.getElementById("outputas").innerHTML = coo++ + 1;
	}
	function ecart(){
	   var ii = document.getElementById("inputa").innerText;
	   var ou = document.getElementById("outputa").innerText;
	   document.getElementById("resultat").innerHTML = ii - ou;
	}
	function zero(){
	    document.getElementById("inputa").innerHTML = 0;
	    document.getElementById("outputa").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
	    i = 0;
        o = 0;
    }
     function garde(){
        var sta = document.getElementById("inputas").innerText;
        var stb = document.getElementById("outputas").innerText;
        var tot = document.getElementById("resultatsab").innerHTML =(sta - stb);
    }
    function peri(){
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
/** calcul du seuil recommandé */

function myseuil(){
    var surface = document.getElementById("surface" ).innerHTML;
    var perisecu = document.getElementById("inputsecur").innerHTML ;
  var seuil = surface / perisecu;
  document.getElementById("leseuil").innerHTML = seuil;
}


    
    function myFunction() {
      taille.push("Le seuil de Réference :") ;
      taille[taille.length] = seuil ;
      document.getElementById("demo").innerHTML = taille ;
    }

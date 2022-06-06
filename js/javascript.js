document.getElementById('player').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 80;
necesarios = 100;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Points: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 100) {
   	alert("You Win!");
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Time: "+tiempo; 
	if (tiempo == 0) {
		alert("Game Over");
		tiempo = 0;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);
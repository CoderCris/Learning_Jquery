
/* Esto esta en javascript nativo
var caja = document.querySelector("#caja");
caja.addEventListener("click", cambiarColor);
function cambiarColor(){
	caja.style.background = "red";
}*/

//esto en jquery

$("#caja").click(function(){
	$("#caja").css({"background":"red"});
});

cambiarColor();

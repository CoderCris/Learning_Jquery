$(document).mousemove(function(este){

	console.log(este.clientX);
	var posX= este.clientX/100;

	$("#cristiano").css({"left": 38 + posX/3 + "%"})
	$("#hazard").css({"left": 5 - posX/5 + "%"})
	$("#suarez").css({"right": 15 - posX/3 + "%"})
	$("#messi").css({"right": 13 + posX/6 + "%"})
	$("#zlatan").css({"right": 20 - posX/3 + "%"})
	$("#totti").css({"right": 27 - posX/2 + "%"})
	$("#ozil").css({"left": 34 - posX/5 + "%"})
	$("#james").css({"left": 28 + posX/3 + "%"})
	$("#iniesta").css({"left": 26 - posX/2 + "%"})
});
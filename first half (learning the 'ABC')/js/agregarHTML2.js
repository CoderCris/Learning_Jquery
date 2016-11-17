$("#boton3").click(function(){

	//Agregar al contenedor
	$("#contenedor2").append('<div clas="text">Texto del "append"</div>')

	//Agrega antes de "c1"
	$("#c1").before('<p>Texto de "before"</p>')

	//Agrega despues de "c1"
	$("#c1").after('<p>Texto de "after"</p>')

	//Agrega en "c1"
	$("#c1").prepend('Texto de "prepend" ')

	//Cambiar texto de c3
	$("#c1").test('Texto de reemplazo ')	
	
});
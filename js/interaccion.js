//variables
var item =0; //variable para saber que item de las bolitas del slide apreto
var itemPaginacion = $('#paginacion li') //tengo todos los li de la paginacion

//slide

$('#paginacion li').click(function(){

	//con esto caputro el atributo item (atrib q no existe en html, si no creado x mi) para saber que bolita se presionó
	item = $(this).attr("item") -1; 

	movimientoSlide(item)

});

//avanzar

$("#slide #avanzar").click(function(){

	avanzar();

})

function avanzar(){

	if(item == $("#slide ul li").length -1){

		item = 0;

	}else{

		item++

	}

	movimientoSlide(item);

}

//retroceder

$("#slide #retroceder").click(function(){

	if(item == 0){

		item = $("#slide ul li").length -1;

	}else{

		item--

	}

	movimientoSlide(item);

})

//movimiento slide
function movimientoSlide(item){

	$("#slide ul").animate({"left": item * -100 + "%"}, 800);

	$('#paginacion li').css({'opacity': .5}) //pongo todas las bolitas con esa opacidad

	$(itemPaginacion[item]).css({'opacity': 1}) //itemPaginacion tiene el array de li y en el q estoy ahora la opac es 1 para marcarla
}

//intervalo de tiempo para que el slide se mueva solo
setInterval(function(){
	avanzar()
},5000)
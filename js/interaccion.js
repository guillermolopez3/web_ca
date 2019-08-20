//variables
var item =0; //variable para saber que item de las bolitas del slide apreto
var itemPaginacion = $('#paginacion li') //tengo todos los li de la paginacion
var interrumpirCiclo = false; //variable para que si interactuo con el slide se interrumpa el cambio automat
var tituloSlide = $('#slide h1');
var detenerIntervalo = false; //cuando el mouse este sobre el slide se detiene la animacion
var windowsWith;


$(document).ready(function() {
	
	windowsWith = $(window).width(); //tamaño pantalla
	animarSegunTamano();
	console.log(windowsWith)
});	


//slide

$('#paginacion li').click(function(){

	//con esto caputro el atributo item (atrib q no existe en html, si no creado x mi) para saber que bolita se presionó
	item = $(this).attr("item") -1; 

	movimientoSlide(item)

});

//animacion iniciar slide

function animarSegunTamano(){
	if(windowsWith <= 576){
		$(tituloSlide[item]).animate({'padding-top': -10 + '%', 'opacity': 0},100);
		$(tituloSlide[item]).animate({'padding-top': 0 + 'px', 'opacity': 1},600)
	}
	else{
		$(tituloSlide[item]).animate({'padding-top': -100 + '%', 'opacity': 0},100);
		$(tituloSlide[item]).animate({'padding-top': 50 + 'px', 'opacity': 1},1000)
	}
}

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

	interrumpirCiclo = true;

	animarSegunTamano()
	
}

//intervalo de tiempo para que el slide se mueva solo
setInterval(function(){
	
	if(interrumpirCiclo){
		interrumpirCiclo = false;
	}
	else{

		if(!detenerIntervalo){

			avanzar();	
		}
	}

	
},5000)


//aparece desaparece flechas al poner el mouse

$('#slide ').mouseover(function(){

	$("#slide #retroceder").css({'opacity': 1})
	$("#slide #avanzar").css({'opacity': 1})
	detenerIntervalo = true
})

$('#slide ').mouseout(function(){

	$("#slide #retroceder").css({'opacity': 0})
	$("#slide #avanzar").css({'opacity': 0})

	detenerIntervalo = false
})
// Init vars.
var $lis = $('#c > li'); //obtengo los li de las imagenes
var max = $lis.length; //maximo de li
var itemEmpleado = 0; //cantidad de bolitas
var itemPaginacion = $('#paginacionTeam li') //obtengo las bolitas de paginacion


var tamanoPantalla=''; //String con el tamaño de la pantalla segun resolucion

var minLiActive = 0 //min li img visible
var maxLiActive = 0 //ultimo li de las img visibles
var cantImgMostradas = 0; //saber que cantidad de imagenes muestro para calcular el max y el min

//cantidades de imagenes a mostrar segun el tamaño de la pantalla
const IMG_GRANDE = 3;
const IMG_MEDIANO = 2;
const IMG_CHICO = 1;

console.log($lis.length)
//Inicio atributos

//me fijo el tamaño de la pantalla al cargar la pagina
$(document).ready(function() {
  iniciarValores();
});

//metodo para cuando la pantalla se redimesiona
$(window).resize(function(){
  iniciarValores()
  cantImgAMostrarSeguntamano()
})

function iniciarValores()
{
  var ancho=$(window).width();

  if(ancho>=768){
    agregarAttrLi(IMG_GRANDE) //muestro 3 imagenes
    tamanoPantalla = 'grande'
    cantImgMostradas = 3
  }
  else if((ancho < 768) && (ancho >= 576) ){
    agregarAttrLi(IMG_MEDIANO) //muestro 2 imagenes
    tamanoPantalla = 'mediana'
    cantImgMostradas = 2
  }
  else if (ancho < 576){
    agregarAttrLi(IMG_CHICO) //muestro 1 imagen
    tamanoPantalla = 'chica'
    cantImgMostradas = 1
  }
  agregarBolitas();
}

//recorro el array y le voy agregando las propiedades li0, li1...
function agregarAttrLi(valor){
  for (var j=0; j<valor; j++) {
    $lis[j].classList.add('active');
  }
  for (var j=0; j<max; j++) {
    $lis[j].classList.add('li'+(j%valor));
  }
}

//cambiando atributos dependiendo la resolución
function cantImgAMostrarSeguntamano(){
  console.log(tamanoPantalla)
  if(tamanoPantalla==='grande'){
    animarSlide()
  }else if(tamanoPantalla==='mediana'){
    animarSlide()
  }else if(tamanoPantalla === 'chica'){
    animarSlide()
  }
}

//evento click de las bolitas de paginación

$('#paginacionTeam li').click(function(){
    
    itemEmpleado = $(this).attr("item") -1; //bolita presionada
 
    $('#paginacionTeam li').css({'opacity': .5}) //pongo todas las bolitas con esa opacidad

    animarSlide()

});

console.log($lis)

function animarSlide(){
  $(itemPaginacion[itemEmpleado]).css({'opacity': 1}) //pongo esa bolita con opacidad 1
  $lis.removeClass('active'); //remuevo todas las propiedades de clase active al array de li

  minLiActive = itemEmpleado * cantImgMostradas
  maxLiActive = minLiActive + cantImgMostradas

  for (var j=minLiActive; j<maxLiActive; j++) {
    $lis[j].classList.add('active');
  }

}
  


//dependiendo el tamaño de la pantalla son la cantidad de bolitas a mostrar. Dependiendo la cantidad de imagenes
// es la cantidad de li que tengo que agregar y bolitas a mostrar
function agregarBolitas(){
  var cantBolitas = 0;
  if(tamanoPantalla==='grande'){
    cantBolitas = 2;
  }else if(tamanoPantalla==='mediana'){
    cantBolitas = 3
  }else if(tamanoPantalla === 'chica'){
    cantBolitas = 5
  }

  for(var i=0; i<itemPaginacion.length;i++){
    if (i <= cantBolitas-1) {
      itemPaginacion[i].classList.remove('d-none')  
    }else{
      itemPaginacion[i].classList.add('d-none') //le agrego la clase para que no se vea  
    }      
  }

}

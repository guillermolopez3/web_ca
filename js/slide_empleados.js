// Init vars.
var timer = 6000;
var i = 0;
var $lis = $('#c > li'); //obtengo los li de las imagenes
var max = $lis.length; //maximo de li
var itemEmpleado = 0; //cantidad de bolitas
var itemPaginacion = $('#paginacionTeam li') //obtengo las bolitas de paginacion
var cantImgMostrar = 0; 

var tamanoPantalla='';

//Inicio atributos

//me fijo el tamaño de la pantalla al cargar la pagina
$(document).ready(function() {
  var nro_img=0
  console.log('tamaño pantalla');

  windowsWith = $(window).width(); //tamaño pantalla
  
  if(windowsWith>=768){
    nro_img=3;
    tamanoPantalla = 'grande'
  }
  else if((windowsWith < 768) && (windowsWith >= 576) ){
    nro_img=2;
    tamanoPantalla = 'mediana'
  }
  //muestro 1 imagen
  else if (windowsWith < 576){
    nro_img=1;
    tamanoPantalla = 'chica'
  }
  agregarAttrLi(nro_img);
});

//metodo para cuando la pantalla se redimesiona
$(window).resize(function(){
  var ancho=$(window).width();

  if(ancho>=768){
    agregarAttrLi(3)
    tamanoGrande()
    tamanoPantalla = 'grande'
  }
  else if((ancho < 768) && (ancho >= 576) ){
    agregarAttrLi(2)
    tamanoMediano()
    tamanoPantalla = 'mediana'
  }
  //muestro 1 imagen
  else if (ancho < 576){
    agregarAttrLi(1)
    tamanoChico()
    tamanoPantalla = 'chica'
  }
  agregarBolitas();
})



//recorro el array y le voy agregando las propiedades li0, li1...
function agregarAttrLi(valor){
  for (var j=0; j<valor; j++) {
    $lis[j].classList.add('active');
  }
  for (var j=0; j<max; j++) {
    $lis[j].classList.add('li'+(j%valor));
  }
}


/*for (var j=0; j<3; j++) {
  $lis[j].classList.add('active');
}
for (var j=0; j<max; j++) {
  $lis[j].classList.add('li'+(j%3));
}*/

console.log($lis);


//cambiando atributos dependiendo la resolución
//mayor igual a 768 a muestro 3 imagenes 
function tamanoGrande(){
  animarSlide(0,3)
}

//menor a 768 y mayor a 576, muestro 2 imagenes
function tamanoMediano(){
  animarSlide(0,2)
}

//menor a 576, muestro 1 imagen
function tamanoChico(){
  animarSlide(0,1)
}



//evento click de las bolitas de paginación

$('#paginacionTeam li').click(function(){
    itemEmpleado = $(this).attr("item") -1; //bolita presionada
 
    $('#paginacionTeam li').css({'opacity': .5}) //pongo todas las bolitas con esa opacidad

    //si presiono la primera bolita
    if(itemEmpleado==0)
    {
      animarSlide(0,3);
    }

    if(itemEmpleado==1){
      animarSlide(3,5);
    }

});

//minArray: desde donde empiezo a poner el active, maxArray: hasta q li pongo active
function animarSlide(minArray,maxArray){
  $(itemPaginacion[itemEmpleado]).css({'opacity': 1}) //pongo esa bolita con opacidad 1
  $lis.removeClass('active'); //remuevo todas las propiedades de clase active al array de li
  for (var j=minArray; j<maxArray; j++) {
    $lis[j].classList.add('active');
  } 
}


function agregarBolitas(){

   
}

 

 // Init classes.
/*for (var j=0; j<3; j++) {
  $lis[j].classList.add('active');
}
for (var j=0; j<max; j++) {
  $lis[j].classList.add('li'+(j%3));
}

// Run timer.
setInterval(function(){ 

  // Hide everything
  $lis.removeClass('active');

  // Show the next four.
  for (var j=i; j<i+3; j++) {
    $lis[j].classList.add('active');
  }

  // Advance iterator.
  i = (i < max-3) ? i+3 : 0

}, timer); */
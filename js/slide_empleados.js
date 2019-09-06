// Init vars.
var $lis = $('#c > li'); //obtengo los li de las imagenes
var max = $lis.length; //maximo de li
var itemEmpleado = 0; //cantidad de bolitas
var itemPaginacion = $('#paginacionTeam li') //obtengo las bolitas de paginacion


var tamanoPantalla=''; //String con el tamaño de la pantalla segun resolucion


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
    agregarAttrLi(3) //muestro 3 imagenes
    tamanoPantalla = 'grande'
  }
  else if((ancho < 768) && (ancho >= 576) ){
    agregarAttrLi(2) //muestro 2 imagenes
    tamanoPantalla = 'mediana'
  }
  else if (ancho < 576){
    agregarAttrLi(1) //muestro 1 imagen
    tamanoPantalla = 'chica'
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
    animarSlide(0,3)
  }else if(tamanoPantalla==='mediana'){
    animarSlide(0,2)
  }else if(tamanoPantalla === 'chica'){
    animarSlide(0,1)
  }
}

//evento click de las bolitas de paginación

$('#paginacionTeam li').click(function(){
    itemEmpleado = $(this).attr("item") -1; //bolita presionada
 
    $('#paginacionTeam li').css({'opacity': .5}) //pongo todas las bolitas con esa opacidad

    //si presiono la primera bolita
    if(itemEmpleado==0)
    {
      if(tamanoPantalla==='grande'){
        animarSlide(0,3)
      }else if(tamanoPantalla==='mediana'){
        animarSlide(0,2)
      }else if(tamanoPantalla === 'chica'){
        animarSlide(0,1)
      }
    }
    else if(itemEmpleado==1){
      if(tamanoPantalla==='grande'){
        animarSlide(3,5)
      }else if(tamanoPantalla==='mediana'){
        animarSlide(2,4)
      }else if(tamanoPantalla === 'chica'){
        animarSlide(1,2)
      }
    }
    else if(itemEmpleado==2){
      if(tamanoPantalla==='mediana'){
        animarSlide(4,6)
      }else if(tamanoPantalla === 'chica'){
        animarSlide(2,3)
      }
    }else if(itemEmpleado==3){
      animarSlide(3,4)
    }else if(itemEmpleado==4){
      animarSlide(4,5)
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

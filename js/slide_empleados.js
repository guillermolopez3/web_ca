// Init vars.
var timer = 6000;
var i = 0;
var $lis = $('#c > li'); //obtengo los li de las imagenes
var max = $lis.length; //maximo de li
var itemEmpleado = 0; //cantidad de bolitas
var itemPaginacion = $('#paginacionTeam li') //obtengo las bolitas de paginacion

//Inicio atributos
for (var j=0; j<3; j++) {
  $lis[j].classList.add('active');
}
for (var j=0; j<max; j++) {
  $lis[j].classList.add('li'+(j%3));
}
console.log($lis);

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
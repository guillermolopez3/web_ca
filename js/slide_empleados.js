// Init vars.
var timer = 6000;
var i = 0;
var $lis = $('#c > li');
var max = $lis.length;

// Init classes.
for (var j=0; j<3; j++) {
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

}, timer);
 
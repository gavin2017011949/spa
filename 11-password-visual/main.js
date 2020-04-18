$(function(){
  var $pass = $('.pass'),
      $eye = $('.eye');

  $eye.mouseover(function(){
    $pass.attr('type','text');
    $eye.addClass('eye2')
  })

  $eye.mouseout(function(){
    $pass.attr('type','password');
    $eye.removeClass('eye2');
  })
})

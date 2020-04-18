$(function(){
  var $input = $('input'),
      $span = $('span');

  $input.change(function(){
    $span.html($input.val());
  })

})

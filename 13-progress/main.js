$(function(){
  var $progress = $('progress'),
      $begin = $('#begin'),
      $stop = $('#stop'),
      $rest = $('#rest'),
      a;

  $begin.click(function(){
    a = setInterval(function(){
      var num = $progress.val();
      num++;
      $progress.val(num);
    },100)
  })
  
  $stop.click(function(){
    clearInterval(a);
  })

  $rest.click(function(){
    $progress.val('0');
    clearInterval(a);
  })
})


$(function(){
  //get dom
  var $width  = $('#width'),
      $height = $('#height');
  var $perimeter = $('#perimeter'),
      $area = $('#area'),
      $form = $('form');
  /*calc button click event*/
  $form.submit(function(e){
    e.preventDefault();
    //validate if error return

    var rect = new Rectangle($width.val(),$height.val());
  
    $perimeter.val(rect.perimeter());
    $area.val(rect.area());
  });
});

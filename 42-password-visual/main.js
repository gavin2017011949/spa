var $a = (function(){
  var $content = $('<div id="box"><label for="pass">密码:</label><input type="password" class="pass"/></div><div class="eye"></div>')
  var passV;
  function showDiv(p){
    $(p).append($content);
    var $eye = $('.eye'),
        $pass = $('.pass');
    $eye.mouseover(function(){
      $pass.attr('type','text');
      $eye.addClass('eye2')
    })

    $eye.mouseout(function(){
      $pass.attr('type','password');
      $eye.removeClass('eye2');
    })
  }
  function getPwd(){
    alert(passV)
  }
  return {
    getPwd:getPwd,
    showDiv:showDiv
  }
}())

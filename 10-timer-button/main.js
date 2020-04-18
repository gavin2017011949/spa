$(function(){
  var $button = $('input'),
      time = 6,
      timer;

  timer = setInterval(function(){
    time--;
    if(time == 0){
      clearInterval(timer);
      $button.val(`确定`);
      $button.removeAttr('disabled');
    }else{
      $button.val(`确定(${time}s)`);
    }
  },1000);

  $button.click(function(){
    alert("已点击确认");
  })
})


$(function(){
  //get dom
  var $width  = $('#width'),
      $height = $('#height');
  var $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btnCal.click(function(){
    //validate if error return
    if(!validate('#width') || !validate('#height')) return;

    var rect = new Rectangle($width.val(),$height.val());
  
    $perimeter.val(rect.perimeter());
    $area.val(rect.area());
  });
  
  //字符检验
  //1.event keypress
  //2.event argument get key value,e.key e.value
  //3.ilegal key filter 非法的键屏蔽掉 e.preventDefault
  //4.合法字符 非法出现 (它出现的位置非法)
  $width.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
    }

  });
  $height.keypress(function(e){
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()\=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault();
      return;
   }
    //合法字符 e
    //允许出现在非科学计数法的数字末尾
    //允许出现在非科学计数法的数字中间
    
    //不允许出现在非科学计数法的数字前面
    //不允许出现在空文本中
    //不允许出现在负号后面
    //不允许出现在科学计数法的数字的末尾
    //不允许出现在科学计数法的数字的前面
    //不允许出现在科学计数法的数字的中间
    
    var pos = e.target.selectionStart,
        con = e.target.value;
    if(e.key === 'e'){
      if(pos === 0 || con.indexOf('e')!==-1 || con.indexOf('E')!==-1){
        e.preventDefault();
        return;
      }
      if(pos === 1 && con.substring(0,1) === '-'){
        e.preventDefault();
        return;
      }
    }
    
    //合法字符E
    //合法字符.
  });


  $width.focusout(function(){
    //if(!validate(width)) select this;
    if(!validate('#width')){
      $width.select()
    } 
  });

  $height.focusout(function(){
    if(!validate('#$height')){
      $height.select();
    }
  });

  function validate(field){
    //var DOM error message
    var $data = $(field),
        $msg = $(field + '-vm');
    //validate null
    if($data.val() === ''){
      $msg.html('不能为空!');
      $data.select();
      return false;
    }

    //validate number
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
      $msg.html('必须是数值!');
      $data.select();
      return false;
    }
    //validate>0
    if(Number($data.val())<0){
      $msg.html('必须大于零');
      $data.select();
      return false;
    }
    //prompt error message
    // return false
    $msg.html("");
    return true;
  }
});

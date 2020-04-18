$(function(){
    var $url = $('input[type="text"]'),
        $btnSave = $('input[type="button"]'),
        $img = $('img'),
        $tmpImg = $('<img>');

    var strImg = window.localStorage.getItem('img');
    if(strImg !== ''){
        $img.attr('src',strImg);
    }
    $btnSave.click(function(){
        //validate url not null
        var url = $url.val();
        if(url === '')  return;
        //load url image tmpImg
        //设置跨域
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
        
        
    })
    $tmpImg.load(function(){
        //利用canvas画布 转为base64
        //create canvas
        var can = $('<canvas>').get(0);
        var ctx = can.getContext('2d');
        ctx.width = $tmpImg.get(0).width;
        ctx.height = $tmpImg.get(0).height;
        //canvas file
        ctx.drawImage($tmpImg.get(0),0,0,can.width,can.height)
        //canvas output base64 string
        var str = can.toDataURL();
        //sava base64 string to localstorage
        window.localStorage.setItem('img',str);
        //load localstorage string to $img
        var strImg = window.localStorage.getItem('img');

        $img.attr('src',strImg);
    })
})
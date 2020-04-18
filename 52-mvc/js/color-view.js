(function(){
    var colorView = {},
        $container,
        $colorView,
        nWidth;
    //初始化
    colorView.init = function(container){
        $container = container,
        $colorView = $('<div class="mvc-colorview" title="Color View"></div>');
        $container.append($colorView);

        nWidth = $colorView.innerWidth();
        //调用 resize
        this.resize();
    }
    //调整大小
    colorView.resize = function(){
        var nPos = ($container.innerHeight() - nWidth)/2;
        $colorView.css({'top':nPos+'px'})
    }
    //颜色改变
    colorView.onColorChange = function(msg){
        var color = 255-msg;
        var colorStr = 'rgb('+color+','+color+','+color+')';
        $('.mvc-colorview').css({'background':colorStr})
    }
    //设为全局对象，绑定在window上
    window.colorView = colorView;
}())
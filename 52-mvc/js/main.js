$(function(){
    //各模块初始化
    colorView.init($('.mvc-view1'));
    sizeView.init($('.mvc-view2'));
    controller.init($('.mvc-view3'));

    controller.on(function(val){
        mvcData.set(val);
        localStorage.setItem('value',val)
    })

    mvcData.on(colorView.onColorChange);
    mvcData.on(sizeView.onSizeChange);

    $(window).resize(colorView.resize);
    $(window).resize(sizeView.resize);

    //用来读取前一次的状态
    var value = localStorage.getItem('value');
    if(value !== null){
        mvcData.set(value);
        controller.setValue(value)
    }
})
$(function(){
    var controller = {},
        $container,
        _listener = [],
        $controller;

    controller.init = function(container){
        $container = container,
        $controller = $('<input class="mvc-controller" type="range" min="0" max="255" value="0" title="Controller">');
        $container.append($controller);

        $controller.change(function(){
            _listener.forEach(function(e){
                //这里this指向window
                //e 这里的函数其实修改data
                e.call(this,$controller.val())
            })
        })
    }

    controller.on = function(listener){
        _listener.push(listener);
    }

    controller.setValue = function(val){
        $controller.val(val);
    }
    window.controller = controller;
})
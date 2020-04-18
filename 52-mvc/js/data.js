$(function(){
    var data = {},
        _value = 0,
        _listeners = [];

    data.set = function(val){
        _value = val;
        notify(val)
    }

    data.get = function(){
        return _value;
    }
    data.on = function(listener){
        _listeners.push(listener)
    }

    function notify(msg){
        _listeners.forEach(function(e){
            e.call(this,msg)
        })
    }

    window.mvcData = data;
})
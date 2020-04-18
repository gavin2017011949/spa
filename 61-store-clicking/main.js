$(function(){
    var $btn = $('#main>input'),
        num = localStorage.getItem('num') || 0;
    
    $btn.val(num+'次')
    $btn.click(function(){
        num++;
        localStorage.setItem('num',num);
        $btn.val(num+'次')
    })

})
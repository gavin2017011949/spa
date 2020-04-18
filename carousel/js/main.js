var m = function(){

    var all = ''+'<div class="slider" id="slider">'+
    '<div class="slide" index="0">'+'<img src="img/b1.png" alt="">'+'</div>'+
    '<div class="slide" index="1">'+'<img src="img/b2.png" alt="">'+'</div>'+
    '<div class="slide" index="2">'+'<img src="img/b3.png" alt="">'+'</div>'+
    '<div class="slide" index="3">'+'<img src="img/b4.png" alt="">'+'</div>'+
    '<div class="slide" index="4">'+'<img src="img/b5.png" alt="">'+'</div>'+
    '</div>'+
    '<span id="left">'+'<'+'</span>'+
    '<span id="right">'+'>'+'</span>'+
    '<ul class="nav" id="navs">'+
    '<li index="0" id="active">'+'1'+'</li>'+
    '<li index="1">'+'2'+'</li>'+
    '<li index="2">'+'3'+'</li>'+
    '<li index="3">'+'4'+'</li>'+
    '<li index="4">'+'5'+'</li>'+
    '</ul>'
    
    function show(container){
        var cont = document.getElementById(container);
        cont.innerHTML = all;
        var right = document.getElementById('right');
        var left = document.getElementById('left');
        var slider = document.getElementById('slider');
        var slide = document.getElementsByClassName('slide');
        var dot = document.getElementById('navs');
        var nowWidth,nextTimer,lastTimer,timer,nextTimer2;
        var ko = false;
        right.onclick = function(){
            clearInterval(nextTimer);
            clearInterval(timer);
            ko = true;
            nowWidth = 0;
            nextTimer = setInterval(nextImg,10);
            changeColor(dot.children[slide[0].getAttribute('index')],'right');
         }
         function nextImg(){
             slider.style.left = '-'+nowWidth+'px';
             nowWidth+=10;
             if(nowWidth>=1200){
                 clearInterval(nextTimer);
                 slider.appendChild(slide[0])
                 slider.style.left = 0;
             }
             
         }
         left.onclick = function(){
             changeColor(dot.children[slide[0].getAttribute('index')],'left');
             slider.insertBefore(slide[4],slide[0]);
             clearInterval(lastTimer)
             clearInterval(timer)
             ko=true
             nowWidth = 1200;
             lastTimer = setInterval(lastImg,10);
         }
         function lastImg(){
             slider.style.left = '-'+nowWidth+'px';
             nowWidth-=10;
             if(nowWidth<=-1){
                 clearInterval(lastTimer);
                 
                 slider.style.left = 0;
             }
         }
         
         function lun(){
             clearInterval(nextTimer2)
             nowWidth = 0;
             
             nextTimer2 = setInterval(nextImg2,10);
             changeColor(dot.children[slide[0].getAttribute('index')],'right');
          }
          function nextImg2(){
              slider.style.left = '-'+nowWidth+'px';
              nowWidth+=10;
              if(nowWidth>=1200){
                  clearInterval(nextTimer2);
                  slider.appendChild(slide[0])
                  slider.style.left = 0;
              }
              
          }
         
         
         dot.onclick = function(ev){
             clearInterval(timer);
             ko=true;
             var ev = ev ||window.event;
             var target = ev.target||ev.srcElement;
             if(target.nodeName.toLowerCase() == 'li'){
                 showImg(target.getAttribute('index'));
                 changeColor(target,'okok');
             }
         }
         
         function showImg(inde){
             console.log(inde)
             var this_li = slide[0].getAttribute('index');
             if(inde>this_li){
                 var x = inde-this_li;
                 for(var y=0;y<x;y++){
                     slider.appendChild(slide[0])
                 }
             }
         
             if(inde<this_li){
                 var x = this_li-inde;
                 for(var g=0;g<x;g++){
                     slider.insertBefore(slide[4],slide[0])
                 }
             }
         }
         
         function changeColor(target,dir){
             var num = Number(target.getAttribute('index'));
             var real = num;
             if(dir === 'right'){
                 real = num === 4 ?0:num+=1
             }else if(dir === 'left'){
                 real = num === 0 ?4:num-=1
             }
             for(var j=0;j<5;j++){
                 dot.children[j].id=''
             }
             dot.children[real].id='active'
         }
         
         setInterval(function(){
             console.log(ko)
             if(ko){
                 timer = setInterval(lun,5000);
                 ko=false
             }
         }, 5000);
         timer = setInterval(lun,5000);
    }
    return {
        show:show
    }
}()

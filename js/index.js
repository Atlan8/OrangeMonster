/* function addLoadEvent(func){
    var oldonload = window.onload; //将当前所有的window.onload函数存到oldonload变量中
    if(typeof window.onload !== 'function'){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload(); //oldonload变量存放了函数，则它的类型变为了function
            func();  //将需要加载的func函数放在oldonload后面一起加载
        }
    }
} */
// $('[data-toggle="popover"]').popover();

$('.nav').click(function() {

});
var a = 0 
var c = setInterval(anim,10);

function anim(){
    a = a + 10
 if(a == 580){
clearInterval(c)
 }else{
    var b = document.getElementById("am");
    b.style.marginLeft = a + "px" ;
 }
    
}
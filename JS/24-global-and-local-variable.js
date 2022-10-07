document.write("<center><h1>global and local variable</h1></center>")
document.write("<h3>local variable</h3>")
function local(){
    var a = ("hlw this is local variable <br> ")
    document.write(a);
}
local(); 
local();
document.write("<hr>")
document.write("<h3>global variable</h3>")
var b = ("so this is global that we can use out side or inside too <br>")
    function global(){
    document.write(b)
}
document.write(b)
global()
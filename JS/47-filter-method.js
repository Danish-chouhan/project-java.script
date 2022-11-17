var a = [30,20,11,1,38];
document.write(a + "<br><br>");
var b = a.filter(fn);
function fn(age){
    return age >= 18
}
document.write(b)

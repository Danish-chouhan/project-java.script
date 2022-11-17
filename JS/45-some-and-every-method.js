document.write("<h1>some</h1>")
var a = [10 , 11 , 12 , 13 , 18];
document.write(a +"<br><br>")
var b = a.some(fn)
document.write(b)
function fn(age){
   return age >= 18
}
document.write("<h1>every</h1>")
var d = [100 , 111 , 122 , 133 , 18];
document.write(d +"<br><br>")
var e = d.every(fnd)
document.write(e)
function fnd(age){
   return age >= 18
}
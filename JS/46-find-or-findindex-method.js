document.write("<h1>find</h1>")
var a = [11,12,13,18,20]
document.write(a + "<br><br>")
var b = a.find(fn)
function fn(age){
    return age >=18
}
document.write(b)
document.write("<hr>")
document.write("<h1>findIndex</h1>")
var c = [11,12,13,19,20]
document.write(c + "<br><br>")
var d = c.findIndex(fnd)
function fnd(age){
    return age >=18
}
document.write(d)
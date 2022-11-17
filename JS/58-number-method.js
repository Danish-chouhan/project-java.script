document.write("<hr>")
document.write("<h1>Number</h1>")
var a = "90"
var b = Number(a)
document.write(b + 10)
document.write("<hr>")
document.write("<h1>ParsInt</h1>")
var c = "90 30 20 "
var d= parseInt(c)
document.write(b)
document.write("<hr>")
document.write("<h1>ParsFloat</h1>")
var e = "90.11"
var f= parseFloat(e)
document.write(f)
document.write("<hr>")
document.write("<h1>isfinite</h1>")
var g = 10.2
var h= Number.isFinite(g)
document.write(h)
document.write("<hr>")
document.write("<h1>isinteger</h1>")
var g = 10
var h= Number.isInteger(g)
document.write(h)
document.write("<hr>")
document.write("<h1>tofixed</h1>")
var i = 10.201918
var j= i.toFixed(5)
document.write(j)
document.write("<hr>")
document.write("<h1>toprecision</h1>")
var k = 10.201918
var l = k.toPrecision(10)
document.write(l)
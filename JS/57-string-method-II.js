document.write("<h1><center>STRING-METHOD-II</center></h1>")
document.write("<hr>")
document.write("<h1>13-charAt</h1>")
var a = "Hlw i m danish chouhan"
var b = a.charAt(10)
document.write(b)
document.write("<hr>")
document.write("<h1>charCodeAt</h1>")
var c = "Hlw i m danish chouhan"
var d = c.charCodeAt(1)
document.write(d)
document.write("<hr>")
document.write("<h1>fromCharCode</h1>")
var e = String.fromCharCode(90)
document.write(e)
document.write("<hr>")
document.write("<h1>concat</h1>")
var f = "Hlw i m danish chouhan"
var g = " i m in 11th class"

var h = f.concat(g)
document.write(h)
document.write("<hr>")
document.write("<h1>Split</h1>")
var i = "hlw i m danish chouhan i m in class 11th"
var j = i.split("i")
document.write(j)
document.write("<hr>")
document.write("<h1>repeat</h1>")
var k = "Hlw i m danish chouhan<br>"
var l = k.repeat(10)
document.write(l)
document.write("<hr>")
document.write("<h1>slice</h1>")
var m = "Hlw i m danish chouhan"
var n = m.slice(1,10)
document.write(n)
document.write("<hr>")
document.write("<h1>substr</h1>")
var o = "Hlw i m danish chouhan"
var p = o.substr(4,20)
document.write(p)
document.write("<hr>")
document.write("<h1>substing</h1>")
var q = "Hlw i m danish chouhan"
var r = q.substring(1,10)
document.write(r)
document.write("<hr>")
document.write("<h1>tostring</h1>")
var s = 50
var t = s.toString()
document.write(t + 10)
document.write("<hr>")
document.write("<h1>valueof</h1>")
var u = "Hlw i m danish chouhan"
var v = u.valueOf()
document.write(v)
document.write("<hr>")
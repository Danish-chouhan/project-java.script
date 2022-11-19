var a = document.createElement("p");

var b = document.createTextNode("hlw i m danish chouhan");

a.append(b)
var c = document.createComment("this is comment");
a.append(c)

console.log(a);

var c = document.getElementById("a1");

a.insertBefore(a,c.childNodes[0])
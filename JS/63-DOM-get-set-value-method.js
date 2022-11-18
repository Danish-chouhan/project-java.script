var a = document.getElementById("a1").innerText


// a = document.getElementById("a1").innerHTML
a = document.getElementById("a1").getAttribute("class")
a = document.getElementById("a1").getAttributeNode("class").value
a = document.getElementById("a1").attributes[2].name

document.write(a)
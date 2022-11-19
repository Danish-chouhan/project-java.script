var a = document.getElementById("list1").children[0];
var b = a.cloneNode(true);

console.log(b)

document.getElementById("list2").appendChild(b);
# appendChild AND insertBefore
[JS FILE](./73-appendChild-and-insertBefore-method.md)
---
> THERE ARE TWO METHOD TWO COMBILE CREAT ELEMENT AND AND CREATNODES
1ST -> appendchild
2ND -> insertbefore
1st we are goin to lear about appendchild
## appendchild
> so append method is use for combine two things the structure is 
```javascript
var a = document.creatElement("h1")

var b = document.creatTextNode("hlw i m danish chouhan")

a.appendChild("b");
console.log(a)
```
> these two variables are now append eachothers
---
## insert before
> insert before can give location to your html where u wanted to show becouse js is pasted at end point then your work is showen in the end so you have to add insertbefore to give location to them 
the structure is 
```javascript
var a = document.creatElement("h1")

var b = document.creatTextNode("hlw i m danish chouhan")

a.appendChild("b");


var c = document.getElementByid("a1")

a.insertBefore(a,c.childNodes[0])
console.log(a)
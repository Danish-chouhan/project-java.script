# cloneNode
[JS FILE](../JS/76-cloneNode-method.js)
---
> in this we can clone anythind i mean that we can copy and paste anything to them 
first u have to see the structure then i tell u that how i did 
```javascript
var a = document.getElementById("list1").children[0];
var b = a.cloneNode(true);

document.getElementById("list2").append(b)
```
> so in this i telling u what i done 
1st i maked 1 varianle and call into them getElementById and then call list1 in id and after calleing them i selected children in same line and index 0 
then i maked 1 more variable and named him b in inside of b i given a and then i call cloneNode then i call true becouse we want elements and value boyh if we want only element then we use false
then i direct call document.getElementById and then i select list2 in id and then i call append then inside of append i call b becouse we want to append list2 with b
and b is calling 0 index value
---

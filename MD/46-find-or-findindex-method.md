# find-or-findindex
[JS FILE](../JS/46-find-or-findindex-method.js)
---
## find
>find is a casual name if we want to find something then we use the name is find in this methos (find) methos is same as casual name 
```javascript
var a = [11,12,13,18,20]
document.write(a + "<br><br>")
var b = a.find(fn)
function fn(age){
    return age >=18
}
document.write(b)
```
---
## findIndex
> findIndex is same as find methos but this dont give the value this show u the index of ur answear
```javascript
var a = [11,12,13,18,20]
document.write(a + "<br><br>")
var b = a.findIndex(fn)
function fn(age){
    return age >=18
}
document.write(b)
```
---
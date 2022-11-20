# setTimeout and clearTimeOut
[JS FILE](../JS/83-setTimeOut-and-clearTimeOut.js)
---
> in this we know that how to make time travel 
there are two methods
1 -> setTimeOUT
2 -> clearTimeOut
now lets begain
## setTimeOut
> in this we can make time travel by milisecond
so lets see the structure
```javascript
var a = setTimeOut(function(){
    var b = document.getElementById("am")
    b.style.marginLeft = "500px"
},1000)
```
> in setInterval you see that how to make animation but in that traveling by second floting slowly slowly but in setTimeOut you see that reach the goal imidiate after some millisecond
---
## clearTimeOut
> in this you can compare with clearInterval to clearTimeOut
lets see the structure
```javascript
var a = setTimeout(function(){
    var b = document.getElementById("am")
    b.style.width = "700px"
},1000)


function sa(){
    clearTimeout(a)
}
```
> in this we find that how to stop animation before working we maked a button and add event and function call to button and make a function like this structure 
---

# setInterval and clearInterval
[JS FILE](../JS/82-setInterval-and-clearInterval-method.js)
---
> in this we learn about animation
ther are 2 methods for animate
1 -> setInterval
2 -> clearInterval
so now lets begain
## setInterval 
> in this interval we can set the aimation now first see the structure 
```javascript
var a = 0
setInterval(anim,1000);

function anim(){
    a = a + 10
    var b = getElementById("am")
    b.style.marginleft = a "px"
}
```
> this is set interval what i do in this i will explain you step by step 
first i maaked a variable and named a inside a i give 0 becouse i want to add some valu 
and then 
i maked setInterval propertie acculy its contain two parameter
1 is function and 2nd is millisecond in this time will counts by millisecond 
and then a make a function name anim
and then inside of function i call one varible name b is b i putted id
and then i call all properties in another line i call b . style 
this is a method of set intervel
---
## clearInterval
> this is for when i want to stop interval 
so lets see the method
```javascript
var a = 0 
var c = setInterval(anim,10);

function anim(){
    a = a + 10
 if(a == 580){
clearInterval(c)
 }else{
    var b = document.getElementById("am");
    b.style.marginLeft = a + "px" ;
 }
    
}
```
> in this all method is same but only we make if else in if we tell them if vaue reached this value then stop this 
---

# form  event method
[JS FILE](../JS/80-Form-Event-method.js)
---
> in this there are 10 method 
1 ->keydown
2 ->keypress
3 ->keyup
4 ->focus()
5 ->blur()
6 ->input
7 ->change
8 ->select
9 ->submit
10 ->invalid
in previus we clethen ar 1 , 2 , 3 now in this we do 4 , 5 , 6
so first we do 4th and then others
## focus 
> so lets se the structure first
first we make form then add onfocus() propertie to that now i show u js structure
```javascript
function fF(element){
    element.style.background = "red"
}
```
> in this i put element in parameter and in calling function i put (this) function to select randomly if we use (this) function then we don't have to make it another time now if u click on text area then background was changed
---
## blur
> so lets se the structure first
first we make form then add onblur() propertie to that now i show u js structure
```javascript
function bF(element){
    element.style.background = ""
}
```
> in this i put element in parameter and in calling function i put (this) function to select randomly if we use (this) function then we don't have to make it another time now if u click on onother textarea then background will be removed
---
## input
> so lets se the structure first
first we make a div then add oninput() propertie to that now i show u js structure
```javascript
function iF(element){
    var a = element.value
    document.getElementById("if").innerHTML = x;
}
```
> in this i put element in parameter and in calling function i put (this) function to select randomly if we use (this) function then we don't have to make it another time 
and we added value to this in variable its becouse we want inside value in our div now u can use it if u write on any form then it will show u at anoterside also
---
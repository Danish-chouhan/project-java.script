# open and close window
[JS FILE](../JS/86-window-open-and-close-method.js)
---
> in this we see hoow to open our wanted web in one button how to close it
so lets learn open first 
# open
> first  of all we have to watch a structure first we creat a buttonn tag in html and then give him a event 
on click and give a function name ow() now se the js structure
```javascript
function ow(){
    window.open("https://www.youtube.com/watch?v=uceqnCKB2Hg&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf""Danish-Youtube","heigt=500px,width=300px,top=100px,left=100px,")
}
```
> now i tell u what i done in this first of all i wnt to tell u that open have 3 parameter (URL,NAME,SIZE) so letw begain 1st i maked function name ow() and then inside of Ow i call window keywoord and then open keyword and inside of parameter i call one URL of youtube then i give a name to him and then i chose height width top left
so this is the pattern of open 
---
> now we learn how to close open window

# close
> first we have to watch a structure
1st i mked a button named close and add a event name onclick and give a function name Cw() now talk about js structure
```javascript
var a;
function ow(){
    a = window.open("https://www.youtube.com/watch?v=uceqnCKB2Hg&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf","Danish-Youtube","width=200px,height=200px,top=100px,left=300px");
}
function cw(){
 a.close();
}
```
> all things are same in close but differense is first we make a variable and call variable value in function ow() in fuction ow all things are stable 
except the value we call in his finction of variable then we creat a new function name cw() in this we direct call variable that we make in 1st step and in close we dont use a window keyword becouse we dont want to close a window we want to close that tab we opened so direct write close after variable and we dont use a parameter in his close keyword
---
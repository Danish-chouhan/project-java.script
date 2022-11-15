# for each loop in array 
[JS file](../JS/49-for-each-loop.js)
---
> recently we talked about some loop name such a (while , do-while , for loop ,) now we talked about (for each loop) rendomly when we want to make a loop then we use some method like (initialize , condition , increment or decrement) and this method is to much talking time now we talking about some short cut loop in his name is for each loop 

> now we start from inbilt option 

```javascript 
var a = ["Danish" , "uzair" , "fayyaz" , "ayyaz"]

a.forEach(function(names , index){
    document.write(index + " - " + names +"<br>")
})
```
> in this first we are making array then use forEach loop then in his paranthasis we make a funtion we dont give his name becouse we are using inbilt option then we open curly braces 1st we have to give a value and if u want to show his index too hen use index inside him (value , index) then we call them in form of document 
so this is a inbilt option

---
> now we talk about his extarnal form 

```javascript

var b = ["Danish" , "uzair" , "fayyaz" , "ayyaz"]

b.forEach(fn)

function fn(value , index)
{
    document.write(index + " - " + value +"<br>")
}
```
> now we are here to talk about extranal form this method id same but now i telling u in details 
> first make array 
then write foreach loop 
then make function and write value and if u want to show index then write index also (value , index )
then we have to call them 
this method is same as ut in external method we write for each loop and function sapretly 
---
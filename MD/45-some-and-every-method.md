# some and array method
[JS FILE](../JS/45-some-and-every-method.js)
---
## some
>some method is use full when we want to add an adupt age verification becouse u can giv  random number in some if some is equl to your number then u have answear is true otherwise false 
```javascript
var a = [10,20,12,13,14]
document.write(a)
var b = a.some(fn)

function fn(age){
    return age >=18
}
document.write(b)
```
---
## every 
> in some and every method is same as same at comparision but there is  differene between (every and some) (some) can show u true if u have one currect as of your value but in (every) we want all the values at equal as compare your value if we dont have then they show false
```javascript
var a = [10,20,12,13,14]
document.write(a)
var b = a.every(fn)

function fn(age){
    return age >=18
}
document.write(b)
```
---
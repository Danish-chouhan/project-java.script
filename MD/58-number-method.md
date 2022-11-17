# NUMBER Method
[JS FILE](../JS/58-number-method.js)
---
> WE TALK ABOUT THESE METHODS 
---
| NUMBER METHOD|
|-----|
|Number()|
|ParseInt()|
|ParseFloat()|
|isFinite()|
|isInteger|
|toFixed()|
|toPrecision()|
---
## Number
> this will show u the number option from string
```javascript
var a = "90"
var b = Number(a)
document.write(b + 10)
```
---
## parseInt
> parseint can not show the dicimal number if this contain 3 to 4 value it may show the first value 
```javascript
var c = "90 30 20 "
var d= parseInt(c)
document.write(b)
```
---
## parsFloat
> this is oposite brother of parseint becous this may contain decimal number too and this may contain 2 to 3 value 
```javascript
var c = "90.119"
var d= parseInt(c)
document.write(b)
```
---
## isfinite
> this may wants the finite value its mean if u have a number value then this will show u true and if not then is show u false
```javascript
var g = 10.2
var h= Number.isFinite(g)
document.write(h)
```
---
## isinteger    
> it may find the integer i think thas is the same as parsint becouse its may could not contain the decimal 
```javascript
var g = 10
var h= Number.isInteger(g)
document.write(h)
```
---
## tofixed
> to fixed value is to fixed with more number that are after point 
```javascript
var i = 10.201918
var j= i.toFixed(5)
document.write(j)
```
---
## toprecision
> if u want mare 0 zaros after desimal then us this method 
```javascript
var k = 10.201918
var l = k.toPrecision(10)
document.write(l)
```
---
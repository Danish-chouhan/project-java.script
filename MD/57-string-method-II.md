# string-method-II
[JS FILE](../JS/57-string-method-II.js)
---
## charAT
> this method is usefull when u want to seleact a string word by their index
```javascript
var a = "hlw i m danish chouhan"
var b = a.charAT(10)
document.write(b)
```
---
## charCodeAt
> 1st of all i want to tell about the sky table becouse without sky table this method is not usefull
![skytable](../image/Screenshot%20from%202022-11-16%2022-21-54.png)
>this is sky table
each charachter have a number this table show that number but in this method we can find a number of your character 
```javascript
var a = "hlw i m danish chouhan"
var b = a.charCodeAt(10)
document.write(b)
```
---
## fromCharCode
> this also use sky table but in this u have to write a sky table number to find a character 
```javascript
var a = string.fromCharCode(90)
document.write(a)
```
---
## concat
> this method is same as same to array's concat becouse these concate have only one mission that they want a combination of two strig and form in one string
```javascript
var a = "hlw i m danish chouhan"
var b = "i m studing in class 11th"
var c = a.concat(b)
document.write(c)
```
---
## split
> split is for remove a thing that u wanted to 
```javascript
var a = "hlw i m danish chouhan"
var b = a.split(" ")
document.write(b)
```
---
## repeat 
> this method is for repeat thing like loop
```javascript
var a = "hlw i m danish chouhan<br>"
var b = a.repeat(10)
document.write(b)
```
---
## slice
> slice is for take a character from random places like index vise its contain two parameter 1st for start and 2nd for end  
```javascript
var a = "hlw i m danish chouhan"
var b = a.slice(10,15)
document.write(b)
```
---
## substr
> this method is same as include becouse this is also have two parameter 1st for start and 2nd for end 
you can pick from middle of string 
```javascript
var a = "hlw i m danish chouhan"
var b = a.subStr(8,21)
document.write(b)
```
---
## substring
>this method same as substr but one differense between those two method and that is u can give two complete parameter but they cantain one incomplete string if ur index is of 10 this will show u only 9
```javascript
var a = "hlw i m danish chouhan"
var b = a.subString(8,21)
document.write(b)
```
---
## tostring
> this method can make number into string 
```javascript
var a = 10
var b = a.toString()
document.write(a + 20)
```
---
## value of
> this will not a important one becouse this may have a normal thing as campare as other method 
```javascript
var a = "hlw i m danish chouhan"
var b = a.valueOf()
document.write(b)
```
---
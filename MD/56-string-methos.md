# string method 

[JS FILE](../JS/56-string-methos.js)
---
| string |
| ----- |
|length|
|toLowerCase|
|toUpperCase|
|include|
|startsWith|
|endsWith|
|search|
|match|
|indexOf|
|LastindexOf|
|replace|
|trim|
|charAt|
|charCodeAt|
|fromCharCode|
|concat|
|split|
|repeat|
|slice|
|substr|
|substring|
|toString|
|valueOf|
## 1-length
> this is method that only find the lenght of string it means this can count all string method and one more thing that length can count space too
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.length
document.write(b)
```
---
## 2-TO-LOWER-CASE
> this method is usefull when u want to write all string latter in small latter 
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.toLowerCase
document.write(b)
```
---
## 3-To-Upper-Case
> this method is usefull when we want to make our all string latter in capital form 
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.ToUpperCase
document.write(b)
```
---
## 4-includes
> includes show us that the value we want to see is available or not if vailable then this show us true otherwise false
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.includes("danish")
document.write(b)
```
---
## 5-starts-with 
> this will show u what value u want to see is available or not at starting or not if have then show true othervise false
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.startsWith("hlw")
document.write(b)
```
---
# 6-ends-with
>this will show u what u want to see is avalaible or not at end pint if then this show true othervise false
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.endsWith("th")
document.write(b)
```
---
# 7-search
>this will show u the correct index of ur string what are u searching is this is same as same include but include show us true or false but this show us a index of the word
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.search("danish")
document.write(b)
```
---
# 8-match
> this will make  new array of duplicate words like what u want to see 
one more thing in tis we not use opening dots we use (forword slash like this and speacialy of g (g) is a special word that find a word globally like this (a.match(/i/g)    )
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.match(/i/g)
document.write(b)
```
---
# 9-indexof
> this will help u to find index of ur word that u want to see like this 
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.indexOf("danish")
document.write(b)
```
---
# 10-lastIndexOf
> this will help u to find index of ur word that u want to find but from backside 
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.lastIndexOf("danish")
document.write(b)
```
---
# 11-replace
>this will help u to replace ur word with another word but this contain two type of parameter (replace from , replace with)
```javascript
var a = "hlw i m danish chouhan and i m styding in class 11th";
var b = a.replace("danish","Danish")
document.write(b)
```
---
# 12-trim
> this will help u to trim extra spaces 
like if u added more then space u want then use it 
```javascript
var a = "     hlw i m danish chouhan and i m styding in class 11th";
var b = a.trim()
document.write(b)
```
---



----

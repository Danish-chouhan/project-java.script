# DOM -> get-set-value-vlue
[JS FILE](../JS/63-DOM-get-set-value-method.js)
---
> in this we ar going to learn that how to get and set the value in DOM
there are 5 methods of get
1 -> innerText
2 -> innerHTML
3 -> getAttribute
4 -> getAttributeNode
5 -> Attribute
---
## get 
### innerText
> in this u can see all text without any html tages if u think to get something of text type from html then use this
```javascript
var a = document.getElementById('ID').innertext
document.write(a)
```
---
### innerHTML
> in this u can see all html tags with your text if u think to do something in html tags then use this
```javascript
var a = document.getElementById('ID').innerHTML
document.write(a)
```
---
### getAttribute
> in this u can see that you can get value of any attribute that's the way to use it 
```javascript
var a = document.getElementById('ID').getAttribute("class")
document.write(a)
```
---
### getAttributeNode
> in this u can  see that you can get attribute name with attribute value now i tell u  that's the way to use it 
```javascript
var a = document.getElementById('ID').getAttributeNode("class").value
document.write(a)
```
---


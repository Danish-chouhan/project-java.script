# CONCAT() AND JOIN() ARRAYS METHOD
# Concat()
> first we talk about concat()
so cancat stands to join 2 arrays in one example --> 
if u create one array --> ["Danish","fayyaz"]
and u create one more array --> ["uzair","adanan"] 
and u want to marge these two array then u have to use concat() arrays
so the pattern to write this in internal is
```javascript
var a = ["danish","fayyaz"]
var b = ["uzair","adanan"]
var c = a.concat(b)
document.write(c)
```
---
# Join()
now we talk about join() 
so if u want to make multiple strings in one string and remove commas
then u use join() method
so the pattern is 
```javascript
var a = ["danish","fayyaz"]
var b = ["uzair","adanan"]
var c = a.concat(b)
document.write(c)
var d = c.join(" - ")
document.write(d)
```
---
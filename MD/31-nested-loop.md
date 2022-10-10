# nested loop
[JS FILE](../JS/31-nested-loop.js)
> the question is what is nested loop ?

> we use nested loop for make loop inside loop for make loop we write this 
```javascript
for(var a = 1; a <= 100; a = a + 10){
    for(var b = a; b < a+10; b++){
        document.write(b + " ")
    }
    document.write("<br>")
}
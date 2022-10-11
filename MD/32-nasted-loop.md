# nested loop II
[JS FILE](../JS/32-nasted-loop.js)
> what is nested loop 2 why is this we recently learn this in privieus video ?

> so guys nested loop II is given us more example so we can use them easyly 

> so guys example one is how to make crosswise number table 1 to 5 so the pattern is 
```javascript
for( var a = 1; a <= 5; a++ ){
    for(var b = 1; b <= a ; b++ ){
        document.write(b + " ")
    }
    document.write("<br>")
}
```
> now we make second example
```javascript
for( var a = 1; a <= 5; a++ ){
    for(var b = 1; b <= a ; b++ ){
        document.write(a + " ")
    }
    document.write("<br>")
}
```
> now we learn third exmple
```javascript
for( var a = 5; a >= 1; a-- ){
    for(var b = 1; b <= a ; b++ ){
        document.write(a + " ")
    }
    document.write("<br>")
}
```
> now we learn the last one
```javascript
for( var a = 5; a >= 1; a-- ){
    for(var b = a; b >= 1 ; b-- ){
        document.write(b + " ")
    }
    document.write("<br>")
}
```
>so this so nested loop II
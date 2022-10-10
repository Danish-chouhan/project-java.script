# find even or odd
[JS FILE](../JS/29-find-even-or-odd-loop.js)
> in this section we have to find even or odd files 
now i tell u how is it 
we use ( for loop + if statement )
so the pattern is 
```javascript
for-loop(initilazation; condition; increment-or-decrement){
    if(var conditon + % + == 0){
        document.write("")
    }
}
```
> now i tell u how to write these in input
```javascript
Even

for(var a = 1; a <= 10; a++){
    if(a % 2 == 0){
        document.write(a + "<br>")
    }
}
```
---
```javascript
Decrement 

for(var a = 1; a <= 10; a++){
    if(a % 2 != 0){
        document.write(a + "<br>")
    }
}
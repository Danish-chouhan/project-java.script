# logical operator

> if we want 2 or more value to run in one condition then use logicla operator in other we have to true the usable value if they are true then they work but if we use logical operator then they are not important for our condition 
there are three types of logical operator

| Operator | Name |
|----------|------|
|&&        |logical and|
| \|\|     |logical or |
|   !      |logical not|

> we test these in console.log

# 1st logical and 
```javascript
var a = 20

if( a >= 10 && a <=25){
    console.log("this is usable")
}
```
> in logical and operater we want all the values true if there are one false and 1 true then logical opertor not works
# 2nd logical or
```javascript
var a = 10
var b = 15

if(a >= 8 || a <= 5){
    console.log("yes they are usable")
}
```
> we want one value true and false for logical or if all values are true then the logical or operator not works 
# 3rd  logical not 
```javascript
var a = 10 

if(!a >= 1){
    console.log("they are usable")
}
```
> logical not operator gives us a oposite value if our answer is true logical not show us false becouse the opertor work for oposite direction
---
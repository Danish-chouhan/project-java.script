# [JAVA-SCRIPT]
---
---
## <u>STRUCTURE HOW TO MAKE FILE</u>
>we use js extantion for [java-script] file the pattern is
```javascript
   file.js
```
### <u>HOW TO LINK A FILE </u>
>we use script src tag to link js the pattern is 
```javascript
<script src=""><script>
```
### <u>types of script
>there are 3 typs of schedule 
1-inline
2-internal
3-external</u>
### <u>TAGS</u>
> we use document.write("") for show anything in output the pattern is
```javascript
document.write("")
```
### <u> for emphasis word we use </u>
> we use i ,u,b tag inside double cots for emphasis the patten is
```javascript
  document.write("<i>any word</i>")
```
### <u>for comment we use </u>
> we use double forword slash for single line
and 
forword slash + star for more then one line so the pattern is 
```javascript
for single line we use [// hlw //]
for more then one line [/*hlw */]
```
### <u> for giving value like id or class we use nav tag in js </u>
> we use[ nav + any value ="any word" the pattern is 
```javascript
nav value =""
FOR OUTPUT SHOW WE USE 
document.write(value that we given in nav tag)
```
### <u>for numberic we use </U>
> we dont have to use double dots the pattern is 
```java
nav + value = any number
WE DONT USE DOUBLE COTS
```
---
### <u>DATA TYPES</u>
| INPUT | OUTPUT |
|-------|--------|
|var a="hlw";|STRING|
|var a=10;|NUMBERIC|
|var a=true or false;|BOLLEAN|
|var a=["HTML","CSS","JS"];|ARREY|
|var a={FIRST="HELLO",SECOND="HELLO"};|OBJECT|
|var a=null;|NULL|
|var a=;|UNDEFINED|
---
### <u>ARITHAMATIC OPERATERS</u>
| OPERATER | DESCRIPTION |
|----------|-------------|
|+         |ADDITION     |
|-         |SUBSTRACTION |
|*         |MULTIPICATION|   
|**        |EXPONANTION  |
|/         |DIVISION     |
|%         |MODULOUS     |
|++        |INCREMENT    |
|--        |DECREMENT    |
---
### <u>COMPARISION OPERATOR</u>
| OPERATOR   | DESCRIPTION |
|------------|-------------|
|==          | EQUAL TO    |
|===         |EQUAL VALUE AND EQUAL TYPE |
|!=          |NOT EQUAL |
|!==         |NOT EQUAL VALUE OR NOT EQUAL TYPE|
|>           |GREATER THEN |
|<           |LESS THAN    |
|>=          |GREATER THEN OR EQUAL TO |
|<=          |LESS THEN OR EQUAL TO    |
---
### <u>Condition thernary operator</u>
> if we want one statement we use condition ternary so the pattern is 
```javascript
structure => (condition)? true statement : false statement ;
we have 2 method to write this in practicle
----------
1st method
----------
var a = 100;
var b;
(a==100)? b = "True" : b = "False";

document.write(b)
----------
2st method
----------
b - (a==100) "True" : "Fayyaz"

document.write(b)
```
---
### <u>switch case</u>
> switch tag is useful when we want to switch condition the pattern is
```javascript
var day = 1

switch (day) {
    case 0 :
            document.write("today is monday");
    break ;
    case 1 :
        document.write("today is tuseday");
    break ;
    case 2:
        document.write("today is wednesday");
    break ;
    case 3 :
        document.write("today is thursday");
    break ;
    case 4 :
        document.write("today is friday");
    break ;
    case 5 :
        document.write("today is saturday");
    break ;
    case 6 :
        document.write("today is sunday");
    break ;
          default:
            document.write("enter the valid day");                                               
}
```
---
### <u>Alert box</u>
> alert tag is usefull whenwe want to show alert popup so the pattern is 
```javascript
var aa = 16
var bb = 14
if( aa > bb ){
    alert("a is greater")
}else{
    alert("b is greater")
}
```
---
### <u>CONFIRM BOX</u>
> confrim boxis useful when we  want to show our wanted pop so the pattern is 
```javascript
var c = confirm("hlw how are you do you like our webpage or not if u like then press ok otherwise cancel")
      
   if(c){
    alert("thanks")
   }
   else{
    alert("sorry")
   }
```
---
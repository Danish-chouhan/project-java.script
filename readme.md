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
### <u> for giving value like id or class we use var tag in js </u>
> we use[ nav + any value ="any word" the pattern is 
```javascript
var value =""
FOR OUTPUT SHOW WE USE 
document.write(value that we given in nav tag)
```
### <u>for numberic we use </U>
> we dont have to use double dots the pattern is 
```java
var + value = any number
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
### <u>prompt box</u>
> prompt box is useful when we want to how something in output or popup by writen in popup so the pattern is to write in output is
```javascript
var per = prompt("write your percentence here")
if(per >= 80 && per <= 100){
    document.write("you are in marit")
}else if(per >= 60 && per <= 80){
    document.write("you are in 1st division")
} else if(per >= 45 && per <= 60){
    document.write("you are in 2nd division")
}else if(per >= 33 && per <= 45){
    document.write("you are in 3rd division")
}else if(per < 33){
    document.write("you are in fail")
}else {
    document.write("enter your valid percentence")
}
```
> for popup write we use this pattern
```javascript
var d = prompt("write your percentence")

 alert = (d)
```
---
### <u>functions uses</u>
> if we want to write someting duplicate at 100 time we use function so we dont have t change somithing in each line we have to change only parrent and they are all childs are automatically changed so the pattern is
```javascript
  function hlw(){
    document.write("hlw i m danish chouhan how are u i think u felling so good")
 };
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<br>")
 hlw();
 document.write("<hr>")
```
> in this pattern veriable value is hlw we can write anything at hlw if we want another value
---
### <u>LOOPS </U>
>LOOP IS DIVIDED IN 3 PARTS 
(INITIALIZATION , CONDITION INCREMENT OR DECREMENT )
1 -> INITIALIZATION IS HAVE TO MAKE THAT ONE VALUE THAT WE HAVE TO RUN 
2 -> CONDITION IF CONDITION IS TRUE THE THIRD PART IS USABLE IF CONDITION IS FALSE THE 3RD PART IS NOT USABLE 
3 -> THE THIRD PART IS INCREMNT , DECREMENT IF YOU WANT TO COME UPER TO LOWER THEN USE DECREMENT AND IF U WANT TO COME LOWER TO UPER THE USE INCREMENT 
THERE ARE FIVE (5) TYPE OF LOOS 
<b>
1 -> while loop
2 -> do/whilw loop
3 -> for loop
4 -> for/in loop
5 -> for each loop 
</b>
now i tell u what is while loop
so the pattern is

>for INCREMENT LOOP
```JAVASCRIPT 
var a = 1;

 while(a <= 10){
     document.write("hlw guys i m danish chouhan i have to learn loops in (js) so this is only demo<br>");
    a = a + 1; 
 }
 ```
 >for decrement loop
```javascript
var ee = 10;

 while(ee >= 1){
     document.write(ee + " )hlw guys i m danish chouhan i have to learn loops in (js) so this is only demo<br>");
    ee = ee - 1; 
 }
 ```
 ---
 ### <u>Do while loop</u>
 > there are some difference between 
 (while loop)and (do while loop) 
while loop first do initialization then condition then increment aur decrement
the do while loop is oposite 
do while loop first do initialization then increment and decrement then conditon 

>so the pattern is 
```javascript
var a = 1

do{
    ducument.write("this is do while loop")

    a = a + 1
}while(a <= 10)
```

 ---
 ### <u>Click Events</u>
 > on click event is popup event but in key press there are 6 types of event 
 <b>

 | event | how to use |
 |-------|------------|
 |click  ->| onclick |
 |Double click ->| ondblclick|
 |right click ->| oncontextmenu|
 |Mouse hover ->| onmouseenter |
 |mouse out -> | onmouseout|
 |mouse down ->| onmousedown|
 > so the patten to make event is 
 ```javascript
    function Hello(){
           alert("hlw this is we called event ")
}
<body>
       <button onclick="Hello()">click me for {single click} (onclick)event</button> 
       <button ondblclick="Hello()">click me for {double click}(ondblclick)event</button>
       <button oncontextmenu="Hello()">click me for {right click}(oncontextmenu)event</button>
       <button onmouseenter="Hello()">click me for {mouse enter }(onmouseenter)event</button>
       <button onmouseout="Hello()">click me for {mouse out}(onmouseout)event</button>
       <button onmousedown="Hello()">click me for {mouse up}(onmousedown)event</button>
      
</body>

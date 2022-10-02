document.write("<h1><u>EMPHASIS</u></h1><br>")
document.write("<i>this is italic</i><br>")
document.write("<b>this is bold</b><br>")
document.write("<u>this is underline</u><br>")
document.write("<strick>this is strick tag</strick><br>")
document.write("<hr>")
document.write("<h1><u>COMMENTS</u></h1><br>")
//document.write("this is comment single line")//
/*document.write("this is comment single line")
document.write("this is comment single line")*/
document.write("<hr>")
document.write("<h1><u>ID</u></h1><br>")
var a = ("this is random text<br>")

document.write(a)
var b = (100)

document.write(b)
document.write("<hr>")
document.write("<h1><u>SWITCH CASE</u></h1><br>")
var day = 0
switch(day){
    case 0 : 
    document.write("today is sunday")
    break;
    case 1 : 
    document.write("today is monday")
    break;
    case 2 : 
    document.write("today is tuesday")
    break;
    case 3 : 
    document.write("today is wednesday")
    break;
    case 4: 
    document.write("today is thursday")
    break;
    case 5: 
    document.write("today is friday")
    break;
    case 6: 
    document.write("today is saturday")
    break;
}    
function Cf(){
    var e = confirm("this is confirm box ")

    if(e){
        alert("thanks")
    }else{
        alert("sorry")
    }
}
function At(){
var d = (20)
var e = (30)
if(d > e){
    alert("e is greater")
}else{
    alert("d is greater")
}
}
function Pt(){
    var f = prompt("write your age here")
if(f >= 80 && f <=100 ){
    alert("you are very old")
}else if (f >= 50 && f <=80 ){
    alert("you are average")
}else if (f >= 30 && f <=50 ){
    alert("you are young")
}else if (f >= 15 && f <= 30 ){
    alert("you are very young")
}else if (f >= 1 && f <=15 ){
    alert("you are child")
}else{
    alert("enter the valid age")
}
}
document.write("<hr>")
document.write("<h1><u> FUNCTIONAL KEY</u></h1><br>")
function Task(){
    document.write("hlw so this is structure to make functional key<br>")
}
Task()
Task()
Task()
Task()
Task()
document.write("<hr>")
function Event(){
    alert("so this is events")
}


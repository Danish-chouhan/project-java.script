document.write("<center><h1>if else if statement</h1></center>")
var per = 100

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
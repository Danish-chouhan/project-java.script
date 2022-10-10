document.write("<h1>CONTINUE</h1><br>")
for(var a = 1; a <= 10; a++){
    if(a == 3){
    document.write("hello  " + a + "<br>")
    continue;
}
document.write("hello i m a boy  " + a + "<br>")
}
document.write("<hr>")
document.write("<h1>BREAK</h1><br>")
for(var a = 1; a <= 10; a++){
    if(a == 3){
    document.write("hello  " + a + "<br>")
    break;
}
document.write("hello i m a boy  " + a + "<br>")
}
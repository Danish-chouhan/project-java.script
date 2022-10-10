document.write("they are even numbers<br>")
for(var a = 1; a <= 50; a++){
    if(a % 2 == 0)
    document.write(a + "<br>")
}
document.write("<hr>")
document.write("they are odd number<br>")
for(var a = 1; a <= 50; a++){
    if(a % 2 != 0){
        document.write(a + "<br>")
    }
}
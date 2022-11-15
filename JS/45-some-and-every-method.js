var ages = [1 , 2 , 3 , 18 , 20]

document.write(ages + "<br> <br>")

var b = ages.some(age);

document.write(b + "<br><br>");
function age(adult){
   return adult >= 18
}
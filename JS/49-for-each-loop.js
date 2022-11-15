var a = ["Danish" , "uzair" , "fayyaz" , "ayyaz"]

a.forEach(function(names , index){
    document.write(index + " - " + names +"<br>")
})


document.write("<hr>")

var b = ["Danish" , "uzair" , "fayyaz" , "ayyaz"]

b.forEach(fn)

function fn(value , index)
{
    document.write(index + " - " + value +"<br>")
}


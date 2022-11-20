var a = setTimeout(function(){
    var b = document.getElementById("am")
    b.style.width = "700px"
},1000)


function sa(){
    clearTimeout(a)
}
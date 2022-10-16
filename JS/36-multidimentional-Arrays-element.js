var ary = [
    ["Danish",17,"eleventh"],
    ["fayyaz",18,"eleventh"],
    ["uzair",17,"nineth"],
    ["ayyaz",16,"nineth"],
    ["adanan",20,"collage"]
] 
   document.write("<table border='1px' cellspacing='5px'>")
for(var a = 0; a < ary.length; a++){
    document.write("<tr>")
    for(var b = 0; b < ary[a].length; b++){
    document.write("<td>" + ary[a][b] + "</td>")
    }
    document.write("</tr>")
}
document.write("</table>")
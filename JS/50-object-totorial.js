var a = {
    fname : "Danish",
    lname : "chouhan",
    age : 17,
    class : "11th",
    gmail : "danishchouhan41@gmail.com",
    friendNames : ["fayyaz" , "ayyaz" , "uzair"], 
    family : {
        "fatherName" : "Imran",
        "motherName" : "firdose"
    },
    salary : function(){
        return 2000
    },
    fullName : function(){
      return this.fname + " " + this.lname
    }
}
document.write(a.fullName() + "<br>")
document.write(a.salary() + "<br>")
document.write(a.family.fatherName + "<br>")
document.write(a.family.motherName + "<br>")
var hamButton = document.getElementById("ham-options");

function hamburger() {
    if (hamButton.style.display === "none") {
        hamButton.style.display = "grid";
    }else{
        hamButton.style.display = "none";
    }

}

var nameInput = document.getElementById("name");
var mailInput = document.getElementById("e-mail");
var textInput = document.getElementById("text");

function validation(){
    if(document. getElementById("name"). value. length == 0)
    {
    nameInput.style.border = "red solid 3px";
    }
    else{
        nameInput.style.border = "greenyellow solid 3px";
    }

    if(document. getElementById("e-mail"). value. length == 0)
    {
    mailInput.style.border = "red solid 3px";
    }
    else{
        mailInput.style.border = "greenyellow solid 3px";
    }

    if(document. getElementById("text"). value. length == 0)
    {
    textInput.style.border = "red solid 3px";
    }
    else{
        textInput.style.border = "greenyellow solid 3px";
    }
}
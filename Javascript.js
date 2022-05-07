function validateEmail() { //validate the emails match
    var emailVal2 = document.getElementById("email2").value;
    var emailVal1 = document.getElementById("email1").value;

    if (emailVal2 == emailVal1) {
        document.getElementById("email2").style.borderColor = "green";
        document.getElementById("emailConfirm").style.color = "green";
        document.getElementById("emailConfirm").innerHTML = "Email Confirmed!";
        return true;
    } else {
        document.getElementById("email2").style.borderColor = "Red";
        document.getElementById("emailConfirm").style.color = "red";
        document.getElementById("emailConfirm").innerHTML = "Email Does not Match!";
        return false;
    }
}

function validateName () { // Validate there is a in game user name
    if (document.getElementById("userName").value == "") {
        document.getElementById("userConfirm").innerHTML = "Enter a User name!";
        document.getElementById("userConfirm").style.color = "red";
        document.getElementById("userName").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("userConfirm").innerHTML = "See you in Game!";
        document.getElementById("userConfirm").style.color= "green";
        document.getElementById("userName").style.borderColor = "green";
        return true;
    }
}
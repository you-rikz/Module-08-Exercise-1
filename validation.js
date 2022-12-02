function validate(){
    if(document.myForm.empid.value==""){
        document.getElementById("iderror").innerHTML= "Please enter your Employee ID";
        return false;
    }
    if(document.myForm.firstname.value==""){
        document.getElementById("fnamerror").innerHTML= "Please enter your First Name";
        return false;
    }
    if(document.myForm.lastname.value==""){
        document.getElementById("lnamerror").innerHTML= "Please enter your Last Name";
        return false;
    }
    if(document.myForm.contact.value==""){
        document.getElementById("contacterror").innerHTML= "Please enter your Contact Number";
        return false;
    }

    if(document.myForm.username.value==""){
        document.getElementById("usererror").innerHTML= "Please enter your Username";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailerorr").innerHTML = "Please enter your email";
        return false;
    } else {
        var regex = /^\S=@\S+\.\S+$/;
        if(regex.test(document.myForm.email.value)==false){
            alert("Please enter a valid email address");
            return false;
        }
    }
    
}



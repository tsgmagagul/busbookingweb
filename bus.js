function validate()
        {
            var useremail= document.getElementById("email").disabled = true;
            
            var password =document.getElementById("password").disabled = true;


            if (useremail== "formget" && password=="formget#123")
            {
alert("Login successfully");
Window.location = "Admin.html";
return false;
            }
            else
            {
alert("please re-enter your password or email");

            }

        }

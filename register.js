function myfunction()
{
    var fname = document.register_form.fname.value;
     var lname = document.register_form.lname.value;
     var email = document.register_form.email.value;
     var phone =document.regidster_form.cell.value;
     var password = document.register_form.password.value;
     var cell =/^\d{10}$/;
     var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
     regName= /\d+$/g;

if(fname=""||regName.test(fname))
{
    Window.alert("Please enter your name properly");
    fname.focus();
    return false;
}
if(lname=""||regName.test(lname))
{
    Window.alert("Please enter your  last name properly");
    lname.focus();
    return false;
}
if(email=""||regEmail.test(email))
{
    Window.alert("Please enter your email properly");
    email.focus();
    return false;
}
if(phone=""||cell.test(phone))
{
    Window.alert("Please enter your cell number properly");
    phone.focus();
    return false;
}
if(password="")
{
    Window.alert("Please enter your password properly");
    password.focus();
    return false;
}
if(password.length<6)
{
    Window.alert("Password should not be less than 6 characters");
    password.focus();
    return false;
}
}
register_form.addEventListener('submit', e=>{e.preventDefault()

})
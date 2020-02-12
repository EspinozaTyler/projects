function valid() {
  var name = document.forms["contact"]["Name"];
  var email = document.forms["contact"]["Email"];
  var phone = Number(document.forms["contact"]["Phone"].value);
  var checkemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var phoneCheck = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

  if (name.value == "") {
    alert("You didn't put in your name.");
    name.focus();
    return false;
  }
  
  if (checkemail.test(email.value)) {
	return true;
  } 
  else {
    return false;
  }
  
   if (phone.value == "") {
    alert("you didn't put in your phone number.");
    phone.focus();
    return false;
  } 
  
  else if (!phoneCheck.test(phone.value)) {
    alert("Not a valid phone number.");
    phone.focus();
    return false;
  } 
  else {
    return true;
  }
}
function play() {

  var name = document.forms["contact"]["Name"].value;
  var email = document.forms["contact"]["Email"].value;
  var phone = document.forms["contact"]["Phone"].value;

  if (valid()) {
    alert("Thank you, " + name + ". " + "You have provided your name, phone which is " + phone +" and email address which is " + email + ". We can better serve you if you filled out the whole form.");
    return true;

  }

}
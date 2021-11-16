function insideFunc() {
  var username = document.forms["InForm"]["username"];
  var email = document.forms["InForm"]["email"];
  var password = document.forms["InForm"]["password"];

  if (username.value == "") {
      window.alert('Please enter your Username');
      username.focus;
      return false;
  }
  if (email.value == "") {
      window.alert('Please enter your Email');
      email.focus;
      return false;
  }
  if (password.value == "") {
      window.alert('Please enter your Surname');
      password.focus;
      return false;
  } else if (password.value.length < 8) {
    window.alert("PASSWORD IS NOT STRONG");
  }
  return true;
}

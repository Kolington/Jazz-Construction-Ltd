function upFunctional() {
       var surname = document.forms["UpForm"]["surname"];
       var firstname = document.forms["UpForm"]["firstname"];
       var middlename = document.forms["UpForm"]["middlename"];
       var email = document.forms["UpForm"]["email"];
       var phonenumber = document.forms["UpForm"]["phonenumber"];
       var dateofbirth = document.forms["UpForm"]["dateofbirth"];
       var address = document.forms["UpForm"]["address"];
       var age = document.forms["UpForm"]["age"];
       var gender = document.forms["UpForm"]["Gender"];
       var username = document.forms["UpForm"]["username"];
       var password = document.forms["UpForm"]["password"];
       var confirmpassword = document.forms["UpForm"]["confirmpassword"];

       if (surname.value == "") {
           window.alert("Please enter your Surname");
           surname.focus;
           return false;
       }
       if (firstname.value == "") {
           window.alert("Please enter your Firstname");
           firstname.focus;
           return false;
       }
       if (middlename.value == "") {
           window.alert("Please enter your Middlename");
           middlename.focus;
           return false;
       }
       if (email.value == "") {
          window.alert("Please enter your Email");
          email.focus;
          return false;
       }
       if (phonenumber.value == "") {
          window.alert("Please enter your Phonenumber");
          phonenumber.focus;
          return false;
       }
       if (dateofbirth.value == "") {
          window.alert("Please enter your Date of Birth");
          dateofbirth.focus;
          return false;
       }
       if (address.value == "") {
          window.alert("Please enter your Address");
          address.focus;
          return false;
       }
       if (age.value == "") {
          window.alert("Please enter your Age");
          age.focus;
          return false;
       }
       if (gender.selectedIndex < 1 && gender.selectedIndex == 'Choose Gender') {
          window.alert("Please enter your Gender");
          gender.focus;
          return false;
       }
       if (username.value == "") {
          window.alert("Please enter your Username");
          username.focus;
          return false;
       }
       if (password.value == "") {
          window.alert("Please enter your Password");
          password.focus;
          return false;
       } else if (password.value.length < 8) {
         window.alert("PASSWORD IS NOT STRONG");
       }
       if (confirmpassword.value == "") {
          window.alert("Please re-enter your Password");
          confirmpassword.focus;
          return false;
       } else if (password.value.length < 8) {
         window.alert("PASSWORD IS NOT STRONG");
       }
       return true;
}

function orderFunction() {
    var surname = document.forms["OrderForm"]["surname"];
    var firstname = document.forms["OrderForm"]["firstname"];
    var address = document.forms["OrderForm"]["address"];
    var items = document.forms["OrderForm"]["items"];

    if (surname.value == "") {
        window.alert('Please enter your Surname');
        surname.focus;
        return false;
    }
    if (firstname.value == "") {
        window.alert('Please enter your Firstname');
        firstname.focus;
        return false;
    }
    if (address.value == "") {
        window.alert('Please enter your Address');
        address.focus;
        return false;
    }
    if (items.value == "") {
        window.alert('Please enter your Item / Items');
        items.focus;
        return false;
    }
    return true;
}

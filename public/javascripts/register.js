$(document).ready(function() {
    $("#password_confirm").keyup(validate);
});

function validate() {
    var password1 = $("#password").val();
    var password2 = $("#password_confirm").val();

    if(password1 == password2) {
        $("#validate-status").text("true");
    }
    else {
        $("#validate-status").text("false");
    }
}

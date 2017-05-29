var org_name = $('#org_name'),
    date_established = $('#date_established'),
    logo = $('#logo'),
    coverphoto = $('#coverphoto'),
    password = $('#password'),
    password_confirm = $('#password_confirm'),
    contact_person = $('#contact_person'),
    contact_number = $('#contact_number'),
    email = $('#email'),
    description = $('#description');
var isComplete = true;

$('.datepicker').pickadate({
     selectMonths: true, // Creates a dropdown to control month
     selectYears: 100, // Creates a dropdown of 15 years to control year
     max: new Date()
 });

$('#password, #password_confirm').on('keyup', function () {
    if (password.val() == password_confirm.val()) {
        password_confirm.removeClass('invalid').addClass('validate');
        isComplete = true;
    } else {
        password_confirm.addClass('invalid').removeClass('validate');
        isComplete = false;
    }
});

$('#password, #org_name, #logo, #coverphoto, #contact_person, #contact_number, #email, #description').on('focus', function () {
    $(':focus').removeClass('invalid').addClass('validate');
});

date_established.on('focus', function () {
    $(':focus').removeClass('invalid');
});

$('#submit').click(function (e) {
    if (org_name.val() == '') {
        org_name.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (date_established.val() == '') {
        date_established.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (logo.val() == '') {
        logo.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (coverphoto.val() == '') {
        coverphoto.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (password.val() == '') {
        password.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (password_confirm.val() == '') {
        password_confirm.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (contact_person.val() == '') {
        contact_person.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (contact_number.val() == '') {
        contact_number.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (email.val() == '') {
        email.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (description.val() == '') {
        description.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (isComplete == false) {
        return false;
    }
});

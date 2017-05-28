$(document).ready(function() {
    $('select').material_select();
});

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#banner').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#upload-btn").change(function(){
    readURL(this);
});

$(".switch").change(function(){
    $("#fee").prop("disabled", !($("#fee").prop("disabled")));
});


var event_name = $("#event_name"),
    event_date = $("#event_date"),
    banner = $("#file-path"),
    organizer = $("#organizer"),
    description = $("#description"),
    location = $("#location"),
    event_type = $("#event_type"),
    fee = $("#fee");

var isComplete = false;

$('#submit').click(function (e) {
    if (event_name.val() == '') {
        event_name.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (event_date.val() == '') {
        event_date.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (banner.val() == '') {
        banner.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (organizer.val() == '') {
        organizer.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (description.val() == '') {
        description.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (location.val() == '') {
        location.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (event_type.val() == '') {
        event_type.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }

    if (fee.val() == '') {
        fee.addClass('invalid').removeClass('validate');
        isComplete = false; // or e.preventdefault();
    }
});

$(document).ready(function() {
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year
        min: new Date()
    });
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
    location_ = $("#location"),
    event_type = $("#event_type"),
    fee = $("#fee"),
    fee_switch = $("#fee_switch");

var isComplete = true;
// 
// $('#submit').click(function (e) {
//     if (event_name.val() == '') {
//         event_name.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (event_date.val() == '') {
//         event_date.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (banner.val() == '') {
//         banner.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (organizer.val() == '') {
//         organizer.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (description.val() == '') {
//         description.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (location_.val() == '') {
//         location_.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (event_type.val() == '') {
//         event_type.addClass('invalid').removeClass('validate');
//         isComplete = false; // or e.preventdefault();
//     }
//
//     if (fee.prop("disabled")){
//         fee = 0;
//     } else {
//         if (fee.val() == '') {
//             fee.addClass('invalid').removeClass('validate');
//             isComplete = false; // or e.preventdefault();
//         }
//     }
// });

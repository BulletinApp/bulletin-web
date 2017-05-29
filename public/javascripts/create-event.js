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

$("#fee_switch").change(function(){
    $("#fee").prop("disabled", !($("#fee").prop("disabled")));
});


var event_name = $("#event_name"),
    event_date = $("#event_date"),
    banner = $("#file-path"),
    organizer = $("#organizer"),
    description = $("#description"),
    event_type = null,
    fee = null,
    fee_switch = $("#fee_switch");

$("input[name=fee_group]").on('change', function(){
        $("#fee").prop("disabled", !($("#fee").prop("disabled")));
});

$("#submit").click(function(){
    event_type = $("input[name='type_group']:checked").val();
    if(event_type == "yes"){
        event_type = 1;
    } else {
        event_type = 0;
    }
    console.log(event_type)

    fee = $("input[name='fee_group']:checked").val();
    if(fee=="with_fee"){
        fee = $("#fee").val().toString();
    } else {
        fee = "free";
    }
    console.log(fee)

});

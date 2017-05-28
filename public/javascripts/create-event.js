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

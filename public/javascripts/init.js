$(document).ready(function(){
    $('.carousel').carousel();
    // $('.carousel.carousel-slider').carousel({fullWidth: true});

    $('.parallax').parallax();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year
        max: new Date()
    });
});

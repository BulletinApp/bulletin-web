$(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
	$('.slider').slider();
    $('.parallax').parallax();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year
        max: new Date()
    });
    $(".button-collapse").sideNav({
          menuWidth: 300, // Default is 300
          edge: 'right', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
        }
    );
});

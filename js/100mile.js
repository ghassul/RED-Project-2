$(function() {

    // bxSlider tuning
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        slideWidth: 0,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideMargin: 0,
        auto: true,
        autoControls: false,
        pager: false,
        controls: false

    });

    //Datepicker
    $("#date").datepicker();

    //Timepicker
    $("#time").timepicker({
        'scrollDefault': 'now'
    });

    // Smoothscroll Function
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    // Grab day
    var getDate = new Date();
    var time = getDate.getDay();

    // Set array of days
    var weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Change text of .today to "It's >day<,"
    $('.today').html('It\'s ' + weekDay[time] + ',');

    // If day is Sunday or Saturday
    if (time === 0 || time === 6) {
        // Change text of .open_closed to "Sorry we're closed"
        $('.open_closed').html('Sorry we\'re closed!');

    } else {
        // Change text of .open_closed to "We're open!"
        $('.open_closed').text('We\'re open!');
    }

});
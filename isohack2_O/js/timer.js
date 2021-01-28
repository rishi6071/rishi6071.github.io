// Set the date we're counting down to
var countDownDate = new Date("Feb 28, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the target date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days = (days < 10) ? ('0' + days) : days;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = (hours < 10) ? ('0' + hours) : hours;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = (minutes < 10) ? ('0' + minutes) : minutes;

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = (seconds < 10) ? ('0' + seconds) : seconds;

    // Output the result in an element with id="demo"
    document.querySelector('#timer_field #days').textContent = days;
    document.querySelector('#timer_field #hours').textContent = hours;
    document.querySelector('#timer_field #minutes').textContent = minutes;
    document.querySelector('#timer_field #seconds').textContent = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#timer_field").innerHTML = "REGISTRATIONS CLOSED !!!";
        document.querySelector("#timer_field").style.color = "#4dd0e1";
    }
}, 1000);
setTimeout(function() {
    $('.loading').fadeToggle();
}, 1600);

 
let preloader = document.getElementById('loading');

let loadFunction = function()   {
    preloader.style.display = "none";
}
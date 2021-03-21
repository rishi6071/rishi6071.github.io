setTimeout(function() {
    $('.loading').fadeToggle();
}, 150);

 

let preloader = document.getElementById('loading');
let loadFunction = function()   {
    preloader.style.display = "none";
}

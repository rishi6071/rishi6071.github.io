let bar = document.getElementById('bar');
let cross = document.getElementById('cross');

let openMenu = function(element)   {
    bar.style.display = "none";
    cross.style.display = "block";
}

let closeMenu = function(element)  {
    bar.style.display = "block";
    cross.style.display = "none";
}
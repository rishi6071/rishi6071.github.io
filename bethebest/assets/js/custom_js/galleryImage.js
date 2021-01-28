// Get the modal

let modal = document.querySelectorAll(".myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".myImg");
var modalImg = document.querySelectorAll(".gallery-img");
var captionText = document.querySelectorAll(".caption");

for(let i=0;i<modal.length;i++) {
    img[i].onclick = function(){
        modal[i].style.display = "block";
        modalImg[i].src = this.src;
        captionText[i].innerHTML = this.alt;
    }          
}

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".popup-close");

// When the user clicks on <span> (x), close the modal
for(let j=0;j<span.length;j++) {
    span[j].onclick = function() {
        modal[j].style.display = "none";
    }
}

// Don't be Busy, be Productive
// Great Things never came from comfort zones
// Stay Humble, Work Hard and be kind
// Don't Complain, Just Work Harder
// It's The Will Not The Skill
// Don't Confuse having a career with having a Life

// const quotes = [
//     'Don\'t Be Busy, Be Productive',
//     'Great Things Never Came From Comfort Zones',
//     'Stay Humble, Work Hard And Be Kind',
//     'Don\'t Complain, Just Work Harder',
//     'It\'s The Will Not The Skill',
//     'Don\'t Confuse having a career with having a Life'
// ];
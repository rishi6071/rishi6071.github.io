
// When User Clicks on Nav then all nav-itesm border will be light but
// but current object have border color reddish

let portfolioNav = function(element)   {

    let navs = document.getElementsByClassName('service-item');
    for(let i=0;i<navs.length;i++) {
        navs[i].style.borderColor = "#e8eaf6";
    }
    element.style.borderColor = "#eb5252";
}
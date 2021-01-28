// Function will call when user clicks on any Nav-Link or Close Icon in Mobile View
const switchToSection = () => {

    let mobileView = document.getElementById('mobile_humberger_menu');
    let desktopView = document.getElementById('desktop_menu');

    mobileView.style.display = "none";
    desktopView.style.display = "block";
}

// Function will call when user clicks on Humberger Sign in Desktop View
const openHumbergerMenu = () => {

    let mobileView = document.getElementById('mobile_humberger_menu');
    let desktopView = document.getElementById('desktop_menu');

    desktopView.style.display = "none";  
    mobileView.style.display = "block";
}
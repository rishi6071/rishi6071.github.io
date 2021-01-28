// When the Page Will be load, 
window.onload = () => {
    location.href = "#navbar_section";
    document.getElementById('home_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
    document.querySelector('#home_bar span:nth-child(2)').style.display = "inline";
}

window.addEventListener('scroll', () => {

    // Home Section
    let home_sec = document.querySelector('#navbar_with_home');
    let home_position = home_sec.getBoundingClientRect().top;

    // About Us Section
    let about_sec = document.querySelector('#about_section');
    let about_position = about_sec.getBoundingClientRect().top;

    // Previous Year Event Section
    let isohack1_O = document.querySelector('#previous_year_event');
    let isohack1_O_position = isohack1_O.getBoundingClientRect().top;

    // Isohack Gallery
    let gallery_sec = document.querySelector('#isohack_gallery_section');
    let gallery_position = gallery_sec.getBoundingClientRect().top;

    // FAQ Section
    let faq_sec = document.querySelector('#faq_section');
    let faq_position = faq_sec.getBoundingClientRect().top;

    // Sponsors Section
    let sponsors_sec = document.querySelector('#sponsors_section');
    let sponsors_position = sponsors_sec.getBoundingClientRect().top;
    
    // Contact Section
    let contact_sec = document.querySelector('#contact_section');
    let contact_position = contact_sec.getBoundingClientRect().top;

    // Screen Positions (These are the Height of Each Section)
    // let screen_position = window.innerHeight;
    let screen_home_position = document.querySelector('#navbar_with_home').offsetHeight;
    let screen_about_position = document.querySelector('#about_section').offsetHeight;
    let screen_isohack1_O_position = document.querySelector('#previous_year_event').offsetHeight;
    let screen_gallery_position = document.querySelector('#isohack_gallery_section').offsetHeight;
    let screen_faq_position = document.querySelector('#faq_section').offsetHeight;
    let screen_sponsors_position = document.querySelector('#sponsors_section').offsetHeight;
    let screen_contact_position = document.querySelector('#contact_section').offsetHeight;   

    const allLinksBlank = () => {
        // Scrollbar Links Border
        let allLinksBorder = document.querySelectorAll('.scrollbar_link');
        for (let i = 0; i < allLinksBorder.length; i++)
            allLinksBorder[i].style.borderLeft = "1.5px solid rgba(119, 136, 153, 1)";

        // Scrollbar Links Name
        let allLinksName = document.querySelectorAll('.scrollbar_link span:nth-child(2)');
        for (let i = 0; i < allLinksName.length; i++)
            allLinksName[i].style.display = "none";
    }

    // -20 is because of Bug Fixing
    if (Math.abs(home_position) < screen_home_position - 20) {
        // console.log(Math.abs(home_position) + ' < ' + screen_home_position);
        allLinksBlank();
        document.querySelector('#home_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#navbar_with_home"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(about_position) < screen_about_position - 20) {
        // console.log(Math.abs(about_position) + ' < ' + screen_about_position);
        allLinksBlank();
        document.querySelector('#about_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#about_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(isohack1_O_position) < screen_isohack1_O_position - 20) {
        // console.log(Math.abs(isohack1_O_position) + ' < ' + screen_isohack1_O_position);
        allLinksBlank();
        document.querySelector('#previous_year_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#previous_year_event"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(gallery_position) < screen_gallery_position - 20) {
        // console.log(Math.abs(gallery_position) + ' < ' + screen_gallery_position);
        allLinksBlank();
        document.querySelector('#gallery_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#isohack_gallery_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if (Math.abs(faq_position) < screen_faq_position - 20) {
        // console.log(Math.abs(faq_position) + ' < ' + screen_faq_position);
        allLinksBlank();
        document.querySelector('#faqs_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#faq_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if(Math.abs(sponsors_position) < screen_sponsors_position - 20) {
        // console.log(Math.abs(sponsors_position) + ' < ' + screen_sponsors_position);
        allLinksBlank();
        document.querySelector('#sponsors_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#sponsors_section"] span:nth-child(2)').style.display = 'inline';
    }
    else if(Math.abs(contact_position) < screen_contact_position - 20) {
        // console.log(Math.abs(contact_position) + ' < ' + screen_contact_position);
        allLinksBlank();
        document.querySelector('#contact_bar').style.borderLeft = "3.5px solid rgb(163,174,186)";
        document.querySelector('a[href="#contact_section"] span:nth-child(2)').style.display = 'inline';
    }
});
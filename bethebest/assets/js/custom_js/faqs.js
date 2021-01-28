// FAQ DEMO Answers Dynamically

// Slot link's List
const serviceItem = document.getElementsByClassName('service-item');

// Slot Section's List
const faqBox = document.getElementsByClassName('faq-box');

for (let i = 0; i < serviceItem.length; i++)
    serviceItem[i].addEventListener('click', changeFaqSection, i, this);

// Own is Current Object and Specific is Position
function changeFaqSection(specific, own) {

    for (let i = 0; i < serviceItem.length; i++) {
        serviceItem[i].style.borderColor = "lightgrey";
        // faqBox[i].style.display = "none";
    }
    this.style.borderColor = "#EB5252";

    const faqOption = document.getElementsByClassName('faqOpt');
    for (let i = 0; i < faqOption.length; i++)
        faqOption[i].addEventListener('click', passText);

}

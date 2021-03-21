/** When hover on Service Card then by hover on div
 *  link will also change their color
 */

let overService = function(x)    {
    let serviceCard = document.getElementsByClassName('service-opt');
    // Indexing starts from 0 that's why x-1    
    serviceCard[parseInt(x-1)].style.color = "white";
}

let outService = function(x) {
    let serviceCard = document.getElementsByClassName('service-opt');
    serviceCard[parseInt(x-1)].style.color = "#34495E";
}
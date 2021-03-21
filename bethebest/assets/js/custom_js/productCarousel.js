// Product Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        },
        1300:{
            items:5
        }
    }
  })
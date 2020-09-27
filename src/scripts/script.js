$(document).ready(function () {
    $('.owl-carousel-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items: 1,
                dots: true,
                nav: false
            },
            480:{
                items:1
            }
        }
    });

    $('.owl-carousel-featured').owlCarousel({
        loop:true,
        margin: 30,
        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items: 1
            },
            480:{
                items:2
            },
            680:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });


});
$(document).ready(function(){
    $('.brands-list').owlCarousel(
        {
            items: 6,
            lazyLoad: true,
            loop: false,
            dots: false,
            margin: 30,
        }
    );
    $('.testimonials-list').owlCarousel({
        loop: false,
        scrollPerPage : true,
        margin: 30,
        nav: false,
        dots: true,
        items: 3,
    })
  });



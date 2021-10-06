jQuery(document).ready(function(){
 
    var $projects = $('.category-villas');
        $projects.isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
        });
        $('ul.menu-villas > li').on('click', function(e) {
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('ul.menu-villas > li').removeClass('active');
        $(this).addClass('active');
        $projects.isotope({
            filter: filter
        });
    });
});

$(document).ready(function() {
    $('.beacon-circle2').hover(function() {
        $(this).prev('.beacon-circle1').css('transform', 'scale(1.1)');
        $(this).prev('.beacon-circle1').fadeOut(1000);
    }, function() {
        $(this).prev('.beacon-circle1').fadeIn(500);
    });
});

$(document).ready(function() {
    $('.show_gallery').click(function() {
        $('.element-item').magnificPopup({
            delegate: 'a',
            type: 'image',
            image: {
                titleSrc: function(item) {
                   return item.el.find('img').attr('title');
                }
            },

            gallery: {
                enabled: true, // set to true to enable gallery
                
                preload: [0,2], // read about this option in next Lazy-loading section
              
                navigateByImgClick: true,
              
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
              
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter,
                ajax: {
                    tError: '<a href="%url%">The request</a> failed.'
                }                   
            }
        });
    });
});

jQuery(function() {
    jQuery('.menu-main .navbar-nav .nav-item a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var navHeight = $('.navbar').height();
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - navHeight
                }, 1000);

                return false;
            }
        }
    });
});

$(document).ready(function() {

$('.popup-youtube').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', 

        patterns: {
          youtube: {
            index: 'https://youtube.com/', 

            id: 'v=',

            src: 'https://youtube.com/embed/%id%autoplay=1' 
          },
        },

        srcAction: 'iframe_src',
      },
  });

});

$(document).ready(function() {
    var height = $('.navbar').height();
    $('.mfp-iframe-holder').css('padding-top', height + 'px');
    $().fancybox({
    selector : '.imglist a:visible',
    protect: true
});
    
});
$('.out-client__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$('.out-client-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
})


  $(document).ready(function(){
	  $(".list-item-body").click(function(){
       // self clicking close
       if ($(this).next(".content").hasClass("active")) {
          $(this).next(".content").removeClass("active").slideUp();
          $(this).children("span").removeClass("fa-minus").addClass("fa-plus");	
       }
     else{
	      $(".list-item .content").removeClass("active").slideUp();
	      $(".list-item .list-item-body span").removeClass("fa-minus").addClass("fa-plus");
       $(this).next(".content").addClass("active").slideDown();
        $(this).children("span").removeClass("fa-plus").addClass("fa-minus");
      }
	  })
	})

//menu scroll
var getHeightMenu = $('.header-top').height();
console.log(getHeightMenu)
$('.header-bottom').css('padding-top', getHeightMenu + 'px');

//slider 

const toggleButton = document.getElementsByClassName('menu-toggle')[0];
const navbarLink = document.getElementsByClassName('menu')[0];
toggleButton.addEventListener('click', () => {
  navbarLink.classList.toggle('active');
})

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

// $('.out-client-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
// })


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
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //nếu lớn hơn 50px thì hiện button
    document.getElementById("click-to-top").style.display = "flex";
  } else {
      //nếu nhỏ hơn 50px thì ẩn button
      document.getElementById("click-to-top").style.display = "none";
  }
}

//gán sự kiện click cho button
document.getElementById('click-to-top').addEventListener("click", function(){
  //Nếu button được click thì nhảy về đầu trang
  $('html, body').animate({scrollTop:0}, 'slow');
});

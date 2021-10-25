const menuBtn = document.querySelector('.menu-btn');
const listMenu = document.querySelector('.navbar-nav');
let menuOpen = false;
const activeClass = "is-show";
let heightMenuBtn = menuBtn.offsetHeight;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        listMenu.classList.add('is-show');
        listMenu.style.paddingTop(heightMenuBtn + "px");
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener("click", function (e) {
    if (!menuBtn.contains(e.target) && !e.target.matches(".navbar-nav")) {
        listMenu.classList.remove(activeClass);
    }
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiperProduct = new Swiper(".mySwiperProduct", {
    freeMode: true,
    grabCursor: true,
    calculateHeight:true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
         },
         // when window width is >= 480px
         576: {
            slidesPerView: 1,
            spaceBetween: 30
         },
         // when window width is >= 640px
         767: {
            slidesPerView: 2,
            spaceBetween: 30
         },
         1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
    onImagesReady: function (swiper) {
        resizeSwiper();
        swiper.onResize();
    }
});

var swiper = new Swiper(".mySwiperInsta", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20
        },
         // when window width is >= 480px
        576: {
            slidesPerView: 1,
            spaceBetween: 30
         },
         // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    }
});

var swiper = new Swiper(".mySwiperCustomerReview", {
    direction: 'vertical',
    slidesPerView: 3,
    loop: true,
    shortSwipes: false,
    observer: true,
    observeParents: true,
    parallax:true,
    paginationClickable: true,
    breakpoints: {
        300: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
         // when window width is >= 480px
        576: {
            slidesPerView: 3,
            spaceBetween: 30
         },
    },
    navigation:
    {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
const toggle = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.main-content');
function checkHasDropdown() {

}
const navItems = document.querySelector('.navbar li').children;
(function showIconDropdown() {
    for (nav of navItems) {
        console.log(nav.nextElementSibling)
        if (nav.nextElementSibling === null) {
            console.log('true')
            nav.children[2].classList.add('hidden');
        }
    }
})();
// toggle navigation
toggle.addEventListener('click', (e) => {
    sidebar.classList.toggle('collapse');
});
//Toggle Menu
$(document).ready(function(){
    // if ($('.navbar li').children().hasClass('dropdown')) {
    //     $(this).children('.dropdown').css('display', 'none');
    // }
    $('.navbar li a').click(function(e){
        e.preventDefault();
        $(this).children('.dropdown').toggleClass('rotate');
        $(this).next('.sub-menu').slideToggle("slow");
    });
});
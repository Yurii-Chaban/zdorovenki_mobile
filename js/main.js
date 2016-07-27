$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
        $(this).addClass('active');
        }
    });
});
$(function () {
    $('.paginator li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
        $(this).addClass('active');
        }
    });
});
/*swiper-container-promotional-product*/
var swiper = new Swiper('.swiper-container-promotional-items', {
    nextButton: '.swiper-button-promotional-next',
    prevButton: '.swiper-button-promotional-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 20,
    pause: 1000,
    speed: 1000,
    loop: true,
    freeMode: true
});
/*swiper-container-popular-products*/
var swiper = new Swiper('.swiper-container-popular-products', {
    nextButton: '.swiper-button-popular-next',
    prevButton: '.swiper-button-popular-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    pause: 1000,
    speed: 1000,
    loop: true
});
/*swiper-container-latest-products*/
var swiper = new Swiper('.swiper-container-latest-products', {
    nextButton: '.swiper-button-latest-next',
    prevButton: '.swiper-button-latest-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    pause: 1000,
    speed: 1000,
    loop: true
});
/*------------------------------*/
$(document).ready(function($) {
    $('.ui.dropdown')
      .dropdown()
    ;
}); 
/*---------------------*/
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
$(".fa-filter").click(function(){
    $(this).removeClass('fa-filter').addClass('fa-close');
})
$(".fa-close").click(function(){
    $(this).removeClass('fa-close').addClass('fa-filter');
})
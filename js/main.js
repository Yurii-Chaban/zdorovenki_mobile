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
/*swiper-container-promotional-product*/
var swiper = new Swiper('.swiper-container-promotional-product', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    pause: 1000,
    speed: 3500,
    loop: true
});
/*swiper-container-popular-products*/
var swiper = new Swiper('.swiper-container-popular-products', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    pause: 1000,
    speed: 3500,
    loop: true
});
/*swiper-container-latest-products*/
var swiper = new Swiper('.swiper-container-latest-products', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    pause: 1000,
    speed: 3500,
    loop: true
});
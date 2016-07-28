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
var swiper = new Swiper('.swiper-container-magnititerapiya-podrobnee-products', {
    nextButton: '.swiper-button-magnititerapiya-podrobnee-next',
    prevButton: '.swiper-button-magnititerapiya-podrobnee-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    pause: 1000,
    speed: 1000,
    loop: true
});
var swiper = new Swiper('.swiper-container-related-products', {
    nextButton: '.swiper-button-related-products-next',
    prevButton: '.swiper-button-related-products-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
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
/*add / remove class it filter button*/
$(".filter-button span").click(function(){
    if($(".filter-button span").hasClass("fa-filter") ){
        $(this).removeClass('fa-filter').addClass('fa-close');
    }
    else {
        $(this).removeClass('fa-close').addClass('fa-filter');
    }
});

/*star*/
// $(function(){
    
//     $('#rating_1').rating({
//         fx: 'full',
//         image: 'images/stars.png',
//         loader: 'images/ajax-loader.gif',
//         url: 'rating.php',
//         callback: function(responce){
            
//             this.vote_success.fadeOut(2000);
//         }
//     });
    
//     $('#rating_2').rating({
//         fx: 'half',
//         image: 'images/stars.png',
//         loader: 'images/ajax-loader.gif',
//         url: 'rating.php',
//         callback: function(responce){
            
//             this.vote_success.fadeOut(2000);
            
//             alert('Общий бал: '+this._data.val);
//         }
//     });
    
//     $('#rating_3').rating({
//         fx: 'float',
//         image: 'images/stars.png',
//         loader: 'images/ajax-loader.gif',
//         minimal: 0.6,
//         url: 'rating.php',
//         callback: function(responce){
            
//             this.vote_success.fadeOut(2000);
//             if(responce.msg) alert(responce.msg);
//         }
//     });
// })
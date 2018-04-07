window.onload = function(){
//大图
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//手机导航
$('.nav_toggle').click(function(){
    $('.nav_mobile').css({'left':'0'});
});
$('.mobile_cha').click(function(){
    $('.nav_mobile').css({'left':'100%'});
})
//首页底部联系border
$('.footer_contactul li').hover(function(){
    $(this).find('.footer_contactxtborder').css({'width':'100%'});
},function(){
    $('.footer_contactxtborder').css({'width':'0'});
})
//右侧固定栏
$('.right_nav ul li').hover(function(){
	$(this).find('span').stop().fadeIn();
},function(){
	$(this).find('span').stop().hide();
});
//返回顶部
/*$(window).scroll(function () {
    if ($(window).scrollTop() > 200)
        $('#backTop').stop().fadeIn();
    else
        $('#backTop').stop().fadeOut();
});*/
$('#backTop').click(function () {
    $('html,body').animate({scrollTop: 0}, 500);
});
}
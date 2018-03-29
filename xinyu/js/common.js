/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-03-28 13:53:06
 * @version $Id$
 */
window.onload = function(){
	//大图
	var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween: 30,
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
	//首页产品滚动
	$(".home_proscroll").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});
}

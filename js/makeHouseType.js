window.onload=function()
{
	//一下是户型介绍的滑块效果
	var mySwiper = new Swiper('.swiper-container', {
		//可选选项，自动滑动
		autoplay: 2000,
		//无限循环切换loop
		loop : true,
		//速度
		speed:300,
		//按钮
		pagination: '.swiper-pagination',
		paginationType : 'fraction',
		//滑动时候的效果
		effect : 'coverflow',
		slidesPerView: 'auto',
		centeredSlides: true,
		coverflow: {
            rotate:30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
       }
	})
};

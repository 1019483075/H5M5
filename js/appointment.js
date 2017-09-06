window.onload=function()
{
	//点击时颜色渐变
	touch.on(".usertxt","tap",function(){
		$(this).siblings(".user-back").addClass('come').parent(".user").siblings('.user').children('.user-back').removeClass('come');
	})
	//提交按钮的闪烁效果
//	touch.on(".tijiao","tap",function(){
//		$(this).addClass('twinkle');
//		window.location.href="mortgage.html";
//	})
}


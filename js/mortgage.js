$(document).ready(function(){
	var Uul=document.getElementsByClassName("Uul")[0];
	var Oli=Uul.getElementsByTagName("li");
	//遍历循环li添加点击跳转事件
	touch.on(".Uul","tap",function(){
		$("li").each(function(){
			window.location.href="AdviserDetails.html";
		})
	})
	//点击按钮  显示超出部分的内容
	var flag=true;
	touch.on(".backTop .backImg","tap",function(){
		if(flag)
		{
			$(".personAsk ul").css({
				"height":"100%"
			});
			$(".backImg").css({
				"-webkit-transform": "rotate(180deg)",
				"-moz-transform": "rotate(180deg)",
				"-ms-transform": "rotate(180deg)",
				"-o-transform": "rotate(180deg)",
				"transform": "rotate(180deg)"
			});
			flag=false;
		}else
		{
			$(".personAsk ul").css({
				"height":"5.02rem"
			});
			$(".backImg").css({
				"-webkit-transform": "rotate(0deg)",
				"-moz-transform": "rotate(0deg)",
				"-ms-transform": "rotate(0deg)",
				"-o-transform": "rotate(0deg)",
				"transform": "rotate(0deg)"
			});
			flag=true;
		}
	})
})

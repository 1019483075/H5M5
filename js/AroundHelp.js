window.onload=function()
{
	//按钮的开关事件
	var flag = true;
	$(".bottombtn .nextbtn").click(function(){
		if(flag){
			$(".aboutAround ul").css({
				"height":"100%"
			});
			$(".nextbtn").css({
				"-webkit-transform": "rotate(180deg)",
				"-moz-transform": "rotate(180deg)",
				"-ms-transform": "rotate(180deg)",
				"-o-transform": "rotate(180deg)",
				"transform": "rotate(180deg)"
			});
			flag = false;
		}else{
			$(".aboutAround ul").css({
				"height":"10.28rem"
			});
			$(".nextbtn").css({
				"-webkit-transform": "rotate(0deg)",
				"-moz-transform": "rotate(0deg)",
				"-ms-transform": "rotate(0deg)",
				"-o-transform": "rotate(0deg)",
				"transform": "rotate(0deg)"
			});
			flag = true;
		}
		
	})
	//遍历li给每个li添加点击事件
	$(".Uul").click(function(){
		$("li").each(function(){
			window.location.href="Peripheral.html";
		})
	})

	if($(".Uul").find('li').length<=4){
		$(".nextbtn").fadeOut();
	}else{
		$(".nextbtn").fadeIn();
	}
	console.log($(".Uul").find('li').length);
}


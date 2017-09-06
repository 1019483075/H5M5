//这里是首页的js效果的动态效果
window.onload=function()
{
	$('#image').animate('tile', {
	  "duration": 2000,//图片碎片用时
	  "rows": 12,//图片碎片行数
	  "cols": 8,//图片碎片列数
	  "effect": "flyIn",//设置碎片类型
	  "fillMode": "backwards"
	});

	touch.on(".main","tap",function(){
		window.location.href="Navigation.html";
	});
	setTimeout(function () {
		$('#image').css('opacity',1);
	},500);
	
	//控制 暂停与开始// Attention ***  video and audio do not support jquery,only javascript
//	var flag = true;
//	var myVideo = document.getElementById("myVideo");
//
//	$(".music").on("click",function(){
//		if(flag){
//			myVideo.pause();
//			flag = false;
//			$(".music").css("animation-play-state","paused")
//		}
//		else{
//			myVideo.play();
//			flag = true;
//			$(".music").css("animation-play-state","running")
//		}
//
//		
//	})
	
	
}



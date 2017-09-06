$(document).ready(function(){
		var idxstart,idxend;
		var mySwiper = new Swiper('.photo_area', {
			//autoplay: 5000  //可选选项，自动滑动
			onSlideChangeStart:function(){
				
				var index=$(".photo_area .swiper-slide-active").index();
				$(".imgwrap .swiper-slide").eq(index).addClass("swiper-slide-active").siblings(".swiper-slide").removeClass("swiper-slide-active");
				$(".album_content").css("backgroundImage","url("+$('.photo_area .swiper-slide-active img').attr("src")+")");
				if(mySwiper.activeIndex>mySwiper.previousIndex){
					next();
				}else{
					prev()
				}
				
			}

		})
		$(".imgwrap .swiper-slide").click(function(){
			$(this).addClass("swiper-slide-active").siblings(".swiper-slide").removeClass("swiper-slide-active");
			var idx=$(".imgwrap .swiper-slide-active").index();
			mySwiper.slideTo(idx,300)
			$(".album_content").css("backgroundImage","url("+$('.photo_area .swiper-slide-active img').attr("src")+")")
		})
		var startX;
		$(".imgwrap")[0].addEventListener("touchstart",function(e){
			 startX=e.touches[0].pageX;
		},false);
		$(".imgwrap")[0].addEventListener("touchmove",function(e){
				
				var moveX=e.touches[0].pageX;
				var disX=moveX-startX;
			if(disX>0){
				prev()
			}else{
				next()
			}
				
		},false)
		var sum=0;
		$(".imgwrap .wrapper .swiper-slide").each(function(){
			sum+=Number($(this).outerWidth())
		})
		$(".imgwrap .wrapper").css("width",sum)
		function prev(){
			var Rem=parseFloat($("html").css("font-size"));
//			var dis=1.7*Rem;
			var dis=1.9*Rem;
			var L=parseFloat($(".imgwrap .wrapper").css("left"));
			var wid=parseFloat($(".imgwrap").css("width"));
			if(L<0){
				
					$(".imgwrap .wrapper").stop().animate({
						"left":(L+wid/4)-2.5
					},300);
			}else{
				$(".imgwrap .wrapper").stop().animate({
						"left":0
					},300);
			}
			
		}
		function next(){
			var Rem = parseFloat($("html").css("font-size"));
//			var dis=1.6*Rem;
			var dis = 1.9*Rem;
			var L = parseFloat($(".imgwrap .wrapper").css("left"));
			var wid = parseFloat($(".imgwrap").css("width"));
			var wid1 = parseFloat($(".imgwrap .wrapper").css("width"));
			// var disw = wid1+L;
			if(wid-L-50 < wid1){
					$(".imgwrap .wrapper").stop().animate({
						"left":(L-wid/4)+2.5
					},300);
			}
		}
 })
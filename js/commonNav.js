$(document).ready(function() {
	var currentIndex = 0;
	var currentId = "camera";
	$(document).ready(function() {
		$("#nav").ferroMenu({
			position 	: "left-center",
			delay 		: 50,
			rotation 	: 720,
			margin		: 20
		});
	});
	function goTo(id){
		if(obj.index > currentIndex){
			$(".active").addClass("off");
			$(".active").transition({
				x : -100,
				opacity : 0,
				zIndex : 0
			},600);
		}else if(obj.index < currentIndex){
		}
	}
});

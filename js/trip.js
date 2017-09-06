var oMin = document.getElementsByClassName("time-minute")[0];
var oHour = document.getElementsByClassName("time-clickWise")[0];

console.log(oMin)
oMin.addEventListener("webkitAnimationEnd",function(){
	alert(1)
})
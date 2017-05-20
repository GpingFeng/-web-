// 搜素栏滚动到特定位置后固定
$(document).ready(function(){
	var box = $("#search_box");
	var boxStart = box.offset().top;
	$(window).scroll(function(){
		var winPos = $(window).scrollTop();
		$(box).css('position',(winPos>boxStart)?'fixed':'absoluted');
		if (winPos>boxStart) {
			$(box).css('top','0px');
		}else{
			$(box).css('top','');
		}
	});
});
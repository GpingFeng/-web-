// 搜素栏滚动到特定位置后固定
$(document).ready(function(){
	var box = $("#search_box");
	var boxStart = box.offset().top;//获得当前元素的y轴上的偏移
	$(window).scroll(function(){
		var winPos = $(window).scrollTop();//滚动条的垂直偏移
		$(box).css('position',(winPos>boxStart)?'fixed':'absoluted');
		if (winPos>boxStart) {
			$(box).css('top','0px');
		}else{
			$(box).css('top','');
		}
	});
});
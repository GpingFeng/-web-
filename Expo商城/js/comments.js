$(document).ready(function(){
	$(".btnDetail").click(function(){
		$(this).parent().parent().parent().next('.comments').slideToggle();
	});
});
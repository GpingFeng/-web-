function login(){
	if (user.email!=$("#inputEmail3").val()) {
		alert("您输入的邮箱帐号不正确");
	}else if (user.password!=$("#inputPassword3").val()) {
		alert("您输入的密码不正确");
	}else {
		window.open("success.html");
	}
}
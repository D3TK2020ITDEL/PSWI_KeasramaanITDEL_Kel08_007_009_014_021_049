function validate(form) {
	var returnValue = true;
	var username = document.getElementById ("Username");
	var password = document.getElementById ("Password");
			
	if(username.value != "mahasiswa"){
		returnValue = false;
		alert("Masukkan Username dengan benar");
		document.getElementById("Username").focus();
	}
	else if(password.value != "del") {
		returnValue = false;
		alert("Password anda salah! \n Coba lagi.");
		document.getElementById("Password").focus();
	}
	return returnValue;
}
	
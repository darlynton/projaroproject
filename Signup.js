var my_password = "auto_pass"
var my_email = "darlynton03@gmail.com"

function showField(field) {
	if (field == "email") {
		document.getElementById('phone_div').style.visibilty = "hidden";
		document.getElementById('email_div').style.visibilty = "visible";
	//console.log('field')

	}
	else {
		document.getElementById('phone_div').style.visibilty = "visible";
		document.getElementById('email_div').style.visibilty = "hidden";
		//console.log('diff')
	}

	
};

function login(email, password) {
	if(email == my_email && password == my_password) {
		alert("welcome back")
	} else {
		alert("Email or Password incorrect")
	};

}

function welcome(email) {
	alert("Welcome " + email)
}


function signIn() {
	var email = document.getElementById('my_email').value;
	var password = document.getElementById('my_password').value;

	if(email == my_email && password == my_password) {
		welcome(my_email);

	} 
	else {
		alert("Email or password incorrect")
	}
}
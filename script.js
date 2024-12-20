//your JS code here. If required.

function submit_btn() {
	let f_name = document.getElementById("f_name").value;
	let l_name = document.getElementById("l_name").value;
	let phone = document.getElementById("phone_no").value;
	let Email = document.getElementById("Email").value;
	alert(`First Name: ${f_name} Last Name: ${l_name} Phone Number: ${phone} Email ID: ${Email}`)
}
//your JS code here. If required.

function submit_btn() {
	let f_name=document.getElementById("f_name");
	let l_name=document.getElementById("l_name");
	let phone=document.getElementById("phone_no");
	let Email=document.getElementById("Email");
	alert(`First Name: ${f_name.value} Last Name: ${l_name.value} Phone Number: ${phone.value} Email ID: ${Email.value}`)
}
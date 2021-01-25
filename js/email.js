function validateEmail(e) { 
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
}

document.addEventListener("DOMContentLoaded", function(){

	const form = document.querySelector(".email-form");
	const emailInput = document.querySelector(".email");
	const errorContainer = document.querySelector(".vmsg");
	const errorMsg = document.querySelector(".span-msg");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const email = emailInput.value;
		const validEmail = validateEmail(email);
		if (validateEmail(email)) {
			errorMsg.innerHTML = 'Email successfully recorded.';
			errorMsg.style.backgroundColor = 'lightgreen';
		} else {
			errorMsg.innerHTML = 'Invalid email address';
			errorMsg.style.backgroundColor = 'crimson';
		}
		errorContainer.style.display = 'block';
		emailInput.value = '';
	});
});
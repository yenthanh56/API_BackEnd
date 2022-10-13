const valid = (username, password, email, cf_password) => {
	if (!username || !password || !email || !cf_password) {
		return "Please fill out all field";
	}
	if (!validateEmail(email)) {
		return "Invalid Email";
	}
	if (password.length > 6) {
		return "please password have more than 6 characters";
	}
	if (!password === cf_password) {
		return "Please check password , password not right";
	}

	const validateEmail = (email) => {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
	};
};

export default valid;

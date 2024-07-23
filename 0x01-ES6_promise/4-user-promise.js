// function to signup a user , returning a resolved promise with firstName
function signUpUser(firstName, lastName) {
	//Return a resolved Promise with the given object
	return Promise.resolve({firstName, lastName });
}

// Export the function so it can be used in other files
export default signUpUser;

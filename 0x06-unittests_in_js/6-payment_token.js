const getPaymentTokenFromAPI = (success) => new promise((resolve, _reject) => {
	if (success) {
		resolve({data: 'Successful response from the API' });
	}

})

module.exports = getPaymentTokenFromAPI;

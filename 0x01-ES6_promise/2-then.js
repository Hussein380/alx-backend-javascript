// Define the function to handle the response from an API
function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // This will run when the promise resolves successfully
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      // This will run when the promise is rejected
      return new Error();
    })
    .finally(() => {
      // This will run regardless of the promise's outcome
      console.log('Got a response from the API');
    });
}

// Export the function so it can be used in other files
export default handleResponseFromAPI;


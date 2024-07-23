// Importing the required functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

// Function to handle profile signup
function handleProfileSignup() {
  // Use Promise.all to wait for both promises to resolve
  return Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      const [photo, user] = results;
      // Log the desired output
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(error => {
      // Log the error message if any promise fails
      console.log('Signup system offline');
    });
}

// Export the function so it can be used in other files
export default handleProfileSignup;


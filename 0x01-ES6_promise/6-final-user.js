// Importing the required functions from 4-user-promise.js and 5-photo-reject.js
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Function to handle profile signup, returning the status and results of the promises
export default function handleProfileSignup(firstName, lastName, fileName) {
    // Call the imported functions with the given arguments
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPromise = uploadPhoto(fileName);

    // Use Promise.allSettled() to wait for both promises to settle
    return Promise.allSettled([signUpPromise, uploadPromise])
        .then((results) => {
            // Map the results to the desired structure
            return results.map((result) => {
                if (result.status === 'fulfilled') {
                    return {
                        status: result.status,
                        value: result.value
                    };
                } else {
                    return {
                        status: result.status,
                        value: result.reason
                    };
                }
            });
        });
}


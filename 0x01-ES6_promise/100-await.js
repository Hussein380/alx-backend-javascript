// Import the required functions
import { uploadPhoto, createUser } from './utils.js';

// Define the async function to handle the user and photo uploads
export default async function asyncUploadUser() {
    try {
        // Await the results of both asynchronous functions
        const photo = await uploadPhoto('somefile.jpg');
        const user = await createUser('John', 'Doe');
        
        // Return the result object with both responses
        return {
            photo,
            user
        };
    } catch (error) {
        // If any error occurs, return an object with null values
        return {
            photo: null,
            user: null
        };
    }
}


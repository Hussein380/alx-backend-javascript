// Define and export the guardrail function
export default function guardrail(mathFunction) {
    // Initialize the queue array
    const queue = [];
    
    try {
        // Try to execute the function and append the result to the queue
        const result = mathFunction();
        queue.push(result);
    } catch (error) {
        // If an error occurs, append the error message to the queue
        queue.push(`Error: ${error.message}`);
    } finally {
        // Always append this message to the queue
        queue.push('Guardrail was processed');
    }
    
    // Return the queue array
    return queue;
}


// 100-weak.js

// Export a constant instance of WeakMap
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the WeakMap
  if (weakMap.has(endpoint)) {
    // Get the current count
    const count = weakMap.get(endpoint);
    // Increment the count
    if (count >= 4) { // Since we increment before checking, we use count >= 4
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  } else {
    // Initialize the count for this endpoint
    weakMap.set(endpoint, 1);
  }
}


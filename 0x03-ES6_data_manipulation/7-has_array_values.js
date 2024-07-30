// File: 7-has_array_values.js

/**
 * Checks if all elements of an array exist within a set.
 *
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if all elements in the array are in the set, false otherwise.
 */
function hasValuesFromArray(set, array) {
  return array.every(element => set.has(element));
}

export default hasValuesFromArray;

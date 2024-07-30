// File: 8-clean_set.js

/**
 * Returns a string of all set values that start with startString, with startString removed.
 *
 * @param {Set} set - The set of strings to check.
 * @param {string} startString - The string that set values should start with.
 * @returns {string} - Concatenated string of filtered and cleaned values, separated by '-'.
 */
function cleanSet(set, startString) {
  // Convert the set to an array, filter by startString, remove startString from values, and join with '-'
  return Array.from(set)
    .filter(value => value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
}

export default cleanSet;


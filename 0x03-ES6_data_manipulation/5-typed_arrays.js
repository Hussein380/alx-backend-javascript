// File: 5-typed_arrays.js

/**
 * Creates an ArrayBuffer with an Int8 value at a specific position.
 *
 * @param {Number} length - The length of the ArrayBuffer.
 * @param {Number} position - The position in the ArrayBuffer to insert the value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} - A DataView of the ArrayBuffer with the value inserted.
 * @throws {Error} - Throws an error if the position is outside the range of the ArrayBuffer.
 */
function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}

export default createInt8TypedArray;


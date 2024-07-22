export default function appendToEachArrayValue(array, appendString) {
  const resultArray = [] // create a new array  to store modified values

  for (const value of array) {
    resultArray.push(appendString + value);
  }

  return resultArray;
}

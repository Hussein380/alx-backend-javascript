export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employeeNames = [];

  // Iterate over the reportWithIterator to collect names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names into a single string with ' | ' separator
  return employeeNames.join(' | ');
}

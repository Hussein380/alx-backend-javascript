export default function createIteratorObject(report) {
  // Extract the allEmployees object from the report
  const allEmployees = report.allEmployees;

  // Create an iterator function
  return (function* () {
    // Iterate over each department in allEmployees
    for (const department in allEmployees) {
      // Iterate over each employee in the current department
      for (const employee of allEmployees[department]) {
        yield employee; // Yield each employee
      }
    }
  })(); // Immediately invoke the generator function
}

export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Using shorthand property notation
    getNumberOfDepartments(list) { // Using shorthand method notation
      return Object.keys(list).length;
    }
  };
}


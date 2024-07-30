function getStudentIdsSum(studentArray) {
  // Check if the input is an array
  if (!Array.isArray(studentArray)) {
	  return 0; // or throw an error if preferred
  }

  // Use reduce to sum all student IDs
  return studentArray.reduce((accumulator, student) => {
	  return accumulator + student.id;
  }, 0); // 0 is the initial value of the accumulator
}
export default getStudentIdsSum;

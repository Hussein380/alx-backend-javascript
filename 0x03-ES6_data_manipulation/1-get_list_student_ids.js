

// Define the function getListStudentIds
function getListStudentIds(studentArray) {
  // Check if the argument is an array
  if (!Array.isArray(studentArray)) {
    return [];
  }
  // Use the map function to extract the ids
  return studentArray.map(student => student.id);
}

// Export the function to use in other files
export default getListStudentIds;


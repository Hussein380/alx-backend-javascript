// File: 4-update_grade_by_city.js

/**
 * Updates the grades of students from a specific city.
 *
 * @param {Array} students - List of student objects.
 * @param {String} city - The city to filter students by.
 * @param {Array} newGrades - List of grade objects, each containing studentId and grade.
 * @returns {Array} - Updated list of students from the specified city with their grades.
 */
function updateStudentGradeByCity(students, city, newGrades) {
  // Filter the list of students to include only those located in the specified city
  return students
    .filter(student => student.location === city) // Filter students by city
    .map(student => {
      // Find the grade for the current student from the newGrades array
      const gradeEntry = newGrades.find(entry => entry.studentId === student.id);
      
      // Return the student object with an updated grade or 'N/A' if no grade is found
      return {
        ...student, // Spread the existing student properties
        grade: gradeEntry ? gradeEntry.grade : 'N/A' // Set grade or 'N/A'
      };
    });
}

export default updateStudentGradeByCity;


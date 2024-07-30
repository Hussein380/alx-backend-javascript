function getStudentsByLocation (studentArray, City) {
	if (!Array.isArray(studentArray) ) {
		return []
	}
	return studentArray.filter(student => student.location === City)

}
export default getStudentsByLocation;

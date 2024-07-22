export default function createEmployeesObject(departmentName, employees) {
	const  Employees = {
		[departmentName]:  employees,
	};
	return Employees;
}


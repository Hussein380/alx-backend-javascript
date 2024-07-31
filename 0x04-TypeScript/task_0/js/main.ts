interface Student {

	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// create two students
const student1: Student = {
	firstName: 'john',
	lastName: 'Doe',
	age: 20,
	location: 'New York'
};

const student2: Studnet = {
	firstName: 'Jane',
	lastName: 'smith',
	age: 22
	location: 'los Angeles'
};
// Create a table element
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Append a new row for each student in the studentsList
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);


// use const for variab;e that wont change
export function taskFirst() {
	  const task = 'I prefer const when I can.';
	  return task;
}

export function getLast() {
	  return ' is okay';
}

// use let for variables that might change
export function taskNext() {
	  let combination = 'But sometimes let';
	  combination += getLast();

	  return combination;
}

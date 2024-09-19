// 0-calcul.js
// fucntion to perform operation based on the 'type'input (SUM, SUBTRACT, DIVIDE)

const calculateNumber = (operation, numA, numB) => {
	if (operation === 'SUM') {
		return Math.round(numA) + Math.round(numB);
	}
	// if operation is SUBTRACT, round both numbers and subtract second from 1st
	if (operation === 'SUBTRACT') {
		return Math.round(numA) - Math.round(numB);
	}
	// if operatio is DIVIDE, check if second round number is zero
	// if zero return eror, else divide first round number by second
	if (operation === 'DIVIDE') {
		return Math.round(numB) === 0 ? 'Error' : Math.round(numA) / Math.round(numB);
	}
	// if no valid operation is passed, return 0 (fallback)
	return 0;
	
};

module.exports = calculateNumber;

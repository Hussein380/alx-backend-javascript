// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for readable data from stdin (user input)
process.stdin.on('readable', () => {
  // Read the input from the user
  const chunk = process.stdin.read();

  // If there's input, display the user's name
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the end of input (when the program ends)
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});

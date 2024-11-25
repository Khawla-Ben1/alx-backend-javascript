process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (userInput) => {
  process.stdout.write(`Your name is: ${userInput}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

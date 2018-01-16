'use strict';
const myCommands = require('./commands/no-stdin.js');
const prompt = '\nprompt > ';
// // Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  const tokens = data.toString().trim().split(' ');
  const cmd = tokens[0];
  const arg = tokens.slice(1).join(' ');

  if (myCommands[cmd]) {
    myCommands[cmd](arg);
  } else {
    process.stderr.write('command not found');
    process.stdout.write(prompt);
  }
});


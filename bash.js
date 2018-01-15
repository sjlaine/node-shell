'use strict';
// // Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var trimmed = data.toString().trim(); // remove the newline
  var cmd = '';
  for (var i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === ' ') {
      var arg = trimmed.slice(i + 1);
      break;
    }
    cmd += trimmed[i];
  }
  var commands = require('./commands.js');
  // commands[cmd]();

  // process.stdout.write('You typed: ' + cmd);

    commands[cmd](arg);
  // process.stdout.write('\nprompt > ');
});


// console.log(process.mainModule.paths[0]);

// console.log(Date());

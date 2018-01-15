'use strict';

var exports = module.exports = {};
const fs = require('fs');

exports.pwd = function() {
    process.stdout.write(process.mainModule.paths[0]);
    process.stdout.write('\nprompt > ');
}

exports.date = function() {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
}

exports.ls = function() {
  fs.readdir('.', function(err, files) {
    if (err) throw err;

    files.forEach(function() {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write('\nprompt > ');
})}

exports.echo = function(arg) {
  process.stdout.write(arg + "\n");
  process.stdout.write('\nprompt > ');
}

exports.cat = function(file) {
  const rr = fs.createReadStream(file);
  rr.on('readable', () => {
    process.stdout.write(`readable: ${rr.read()}`);
  });
  rr.on('end', () => {
    process.stdout.write('\nend');
  });

  process.stdout.write('\nprompt > ');
}

exports.head = function(file) {
  // const rr = fs.createReadStream(file);
    fs.readFile(file.toString(), function (err, data) {
      if (err) throw err;

      var lines = data.toString().split('\n');

      for (var i = 0; i < 5; i++) {
          process.stdout.write(lines[i] + '\n');
      }
    });
  // rr.on('readable', () => {
  //   process.stdout.write(`readable: ${rr.pause()}`);
  // });
  // rr.on('readable', () => {
  //   process.stdout.write(`readable: ${rr.read()}`);
  // });
  process.stdout.write('\nprompt > ');

}

exports.tail = function(file) {

}


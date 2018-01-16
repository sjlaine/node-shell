// var exports = module.exports = {};
const fs = require('fs');

module.exports.jordan = function() {
  process.stdout.write(`It's brownie time!`);
  process.stdout.write('\nprompt > ');
}

module.exports.pwd = function() {
    process.stdout.write(process.mainModule.paths[0]);
    process.stdout.write('\nprompt > ');
}
module.exports.date = function() {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
}
module.exports.ls = function() {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    process.stdout.write(files.join('\n'));
    process.stdout.write('\nprompt > ');
})}
module.exports.echo = function(arg) {
  process.stdout.write(arg);
  process.stdout.write('\nprompt > ');
}

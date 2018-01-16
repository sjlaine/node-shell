module.exports.cat = function(file) {
  const rr = fs.createReadStream(file);
  rr.on('readable', () => {
    process.stdout.write(`readable: ${rr.read()}`);
  });
  rr.on('end', () => {
    process.stdout.write('\nend');
  });
  process.stdout.write('\nprompt > ');
}
module.exports.head = function(file) {
    fs.readFile(file.toString(), function (err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      for (var i = 0; i < 5; i++) {
          process.stdout.write(lines[i] + '\n');
      }
    });
  process.stdout.write('\nprompt > ');
}
// module.exports.tail = function(file) {
// }

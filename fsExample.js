Create a new file using the appendFile() method:

var fs = require('fs');



fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {

  if (err) throw err;

  console.log('Saved!');

});



Create a new, empty file using the open() method:

var fs = require('fs');



fs.open('mynewfile2.txt', 'w', function (err, file) {

  if (err) throw err;

  console.log('Saved!');

});



Create a new file using the writeFile() method:

var fs = require('fs');



fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {

  if (err) throw err;

  console.log('Saved!');

});



Append "This is my text." to the end of the file "mynewfile1.txt”:.



var fs = require('fs');



fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {

  if (err) throw err;

  console.log('Updated!');

});



Replace the content of the file "mynewfile3.txt":



var fs = require('fs');



fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {

  if (err) throw err;

  console.log('Replaced!');

});



Delete "mynewfile2.txt":

var fs = require('fs');



fs.unlink('mynewfile2.txt', function (err) {

  if (err) throw err;

  console.log('File deleted!');

});





Rename "mynewfile1.txt" to "myrenamedfile.txt":



var fs = require('fs');



fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {

  if (err) throw err;

  console.log('File Renamed!');

});

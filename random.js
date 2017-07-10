var randomWords = require('random-words');
var fs = require('fs');
var words = randomWords({ min: 5, max: 10 })
for (i = 0; i < 9999; i++) {
    words = words + ' ' + randomWords({ min: 5, max: 10 });
}


fs.appendFile('dici.txt', words, function(err) {

    if (err) throw err;

    console.log('Saved!');

});


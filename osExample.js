var os = require("os");



// Endianness

console.log('endianness : ' + os.endianness());



// OS type

console.log('type : ' + os.type());



// OS platform

console.log('platform : ' + os.platform());



// Total system memory

console.log('total memory : ' + os.totalmem()/1024 + " kbytes.");



// Total free memory

console.log('free memory : ' + os.freemem()/1024 + " kbytes.");


// Memory ratio

console.log('Ratio'+os.totalmem()/1024/os.freemem()/1024 );

const path = require('path');

// basename -> Base file name
console.log(path.basename(__filename));

// dirname -> Directory name. Same as __dirname
console.log(path.dirname(__filename));

// extname -> File extension
console.log(path.extname(__filename));

// parse -> Create path object
console.log(path.parse(__filename));

//join -> Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

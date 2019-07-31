const fs = require('fs');
const { Transform } = require('stream');

const sourcePath = './old_file.txt';
const destinationPath = './new_file.txt';

const sourceFileReadStream = fs.createReadStream(sourcePath);
const destinationFileWriteStream = fs.createWriteStream(destinationPath);

let upperCaser = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

sourceFileReadStream
    .pipe(upperCaser)
    .pipe(destinationFileWriteStream);

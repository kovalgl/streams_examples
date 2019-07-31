const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');

const gzip = zlib.createGzip();

const sourcePath = './old_file.txt';
const destinationPath = './new_file.txt';
const archiveDestinationPath = './archive.zip';

const sourceFileReadStream = fs.createReadStream(sourcePath);
const destinationFileWriteStream = fs.createWriteStream(destinationPath);
const archiveWriteStream = fs.createWriteStream(archiveDestinationPath);

let upperCaser = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

sourceFileReadStream
    .pipe(upperCaser)
    .pipe(destinationFileWriteStream);

sourceFileReadStream
    .pipe(gzip)
    .pipe(archiveWriteStream);
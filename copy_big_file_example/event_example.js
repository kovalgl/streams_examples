// Creating large file backup without keeping all data in memory
const fs = require('fs');

const sourcePath = './old_file.txt';
const destinationPath = './new_file.txt';

const sourceFileReadStream = fs.createReadStream(sourcePath);
const destinationFileWriteStream = fs.createWriteStream(destinationPath);

sourceFileReadStream.on('data', (chunk) => {
    destinationFileWriteStream.write(chunk);
});

sourceFileReadStream.on('end', () => {
    destinationFile.end();
});
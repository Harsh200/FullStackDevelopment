//Zlib provide compression and decompression facilities
let zlib=require('zlib');
//console.log(zlib);
let fs=require('fs');//fs is file system module
//console.log(fs);

/*
Compress a file

let gzip=zlib.createGzip();

let file=fs.createReadStream('demo.txt');//read file
let output=fs.createWriteStream('output.gz');//write file
file.pipe(gzip).pipe(output)


 */

//Unzip a file
let unzib=zlib.createUnzip();
let file=fs.createReadStream('output.gz');
let out=fs.createWriteStream('unzibfile.txt');
file.pipe(unzib).pipe(out)


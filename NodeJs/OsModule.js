let os=require('os');
//console.log(os);

console.log(`Current os architecture is ${os.arch()}`);//Give the current os architecture

console.log(`Platform is ${os.platform()}`);
console.log(`os release is ${os.release()}`);
console.log(`total memory is ${os.totalmem()}`);
console.log(`free memory is ${os.freemem()}`);
console.log(`Home directory is ${os.homedir()}`);
console.log(`Temporary directory is ${os.tmpdir()}`);
console.log(`Host name is ${os.hostname()}`);
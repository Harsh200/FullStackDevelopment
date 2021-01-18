let fs=require('fs');
//console.log(fs);
let data=fs.readFileSync('demo.txt','utf-8');
console.log(data);
console.log('wecome to nodejs by hks');//this is blocking code, not work until sync completed

/*
In async, the other statement will executed till the searching and loading work
 */
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
//console.log(dataAsyn);
console.log('wecome to Async callback');


//Write file sync method of fs module

fs.writeFileSync('sample1.txt','wecome to nodejs Session with hks');
let d=fs.readFileSync('sample1.txt','utf-8');
console.log(`code executed afer completing write operation ${d}`);

//Async version of write file

fs.writeFile('sample2.txt','welcome to new file write',()=>console.log('data successs'))


//Read data from one file and write data in another file
fs.readFile('sample1.txt','utf-8',(err,data)=>{
    console.log('read operation completed');
    fs.writeFile('sample3.txt',data,()=>console.log('write operation done'));
})




//Remove file sync
/*
fs.unlinkSync('sample1.txt');
console.log('file is deleted');
*/
//remove file Async
/*
fs.unlink('sample3.txt',()=>{
    console.log('file is deleted with asyn');
})
*/

//Create directory
//Sync
//let dir=fs.mkdirSync('newdir');
//console.log(dir);
//Create directory Async
//fs.mkdir('newdir1',()=>console.log('Directory 1 created successfully'));

//create a file in specified directory
/*
fs.mkdir('dir2',()=> {
    fs.writeFile('dir2/sample4.txt', 'welcome to sample4 file', () => {
        console.log('data written to sample 4 ');
    })
})
*/

//Remove a directory
//fs.rmdirSync('newdir');

//Rename a file and directory
/*
fs.rename('sample4.txt','sample5.txt',()=>{
    console.log('file renamed');
})
*/

//Get information about file
fs.stat('demo.txt',(err,stats)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(stats);
        console.log(stats.isFile());
        console.log(stats.isDirectory());
    }
})


//Open a file

fs.open('demo.txt','r',(err,fd)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log('file demo.txt opened as read operation');
        fs.readFile(fd,'utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else {
                console.log(data);
            }
            })
    }

})
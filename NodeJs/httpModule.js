let http=require('http');
//console.log(http);

//os module
let os=require('os');
//console.log(os);

let fs=require('fs');
//console.log(fs);

//User defined module
let b=60;
//module.exports.b = b;
let a=50;
//module.exports.a= a;

let add=(a,b)=>a+b;
//module.exports.add = add(10,20);

//Export a object
let eid=1;
let ename='hks';
let emp={
    eid:eid,
    ename:ename
}
//module.exports.emp=emp;

let c=10;

module.exports={
    a:a,
    add:add(10,20),
    emp:emp,
    b:b,
    c:c

}
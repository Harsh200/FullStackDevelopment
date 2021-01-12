function greet(name){
    let msg;
    if(name=='Harsh'){
         msg='welcome'+name;
        document.write(msg);
    }
    else{
       msg='hello guest';
        document.write(msg);
    }
// let msg; it not work, because var not follow hoisting principle
}

var a=10;
document.write(a+"<br>");
var a=100;
document.write(a+"<br>");

let b=100;
//let b=1000; error
b=1000;// it will not give error because we can change the value
document.write(b);

// Redeclaration are not allowed with respect to let
/*
let a=100;
let a=10; Error
 */


/*
Const declaration are blocked scope
they are not hoisted
const value cannot be changed
 */
greet('Harsh');

// Let has block scope but var has functional scope. let do not follow hoist principle


function constant(){
    a=900;
    let b=100;
    b=1000;//no error
    document.write(a);
    document.write(b);
    const c=1000;
    document.write(c);
    if(a==900){
        const d=1000;
        document.write(c);
    }
    // document.write(d); it give error because const is block scope/
    //c=10 error;
    //const d; error because assignment is compulsory
}
constant();
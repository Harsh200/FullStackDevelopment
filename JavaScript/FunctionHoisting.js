/* these function calling are hoisting */
document.write(add(100,20)+"<br>");
function add(first,second){
    let res=first+second;
    return res;

}
document.write(add(10,20));


/* in function expression the function are not hoisted */
// add1(40,40); it not work because function hoisting not worked with function expression

//Anonymous function expression
let add1=function (first,second){
    /*
    here hoisting not work
     */
    let res=first+second;
    document.write(res+"<br>");
}
add1(50,50);


//Named function expression
// mul(30,30); error also hoisting not work
 let mul=function multiplication(first,second){
     let res=first*second;
     document.write(res+"<br>");
 }
 mul(10,10);
 // multiplication(10,10); error


// Self invoking function expression

let sub=(function substraction(first,second){
    let res=first-second;
    document.write(res);
})
(70,35);
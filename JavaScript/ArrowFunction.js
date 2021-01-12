function add(first,second){
    let res=first+second;
    document.write(res+"<br>");
}
add(10,20);

// now same example with the help of arrow function

let add1=(n1,n2)=>{
    let res=n1+n2;
    document.write(res+"<br>");
}
add1(100,120);


//Example two

function display(){
    document.write("Hello world"+"<br>");
}
display();

let display1=()=>
    document.write("hello new "+"<br>");
display1()


function double(n){
    return 2*n;
}
document.write(double(30)+"<br>");


// reduce more length
let res=n=> n*2;
document.write(res(5)+"<br>");

setInterval(()=>{
let d=new Date();
document.write(d);
d=new Date();
},1000);
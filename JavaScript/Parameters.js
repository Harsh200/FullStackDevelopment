// Default Parameters
function add(a,b){
    document.write(a+"<br>");
    document.write(b+"<br>");
    document.write(a+b+"<br>");
}

add(10);

// Make use of default values

function add1(a=1000,b=90){
    document.write(a+"<br>");
    document.write(b+"<br>");
    document.write(a+b+"<br>");
}

add1(10);
add1(30,30);
add1();
add1(400);


// Rest Parameter- Passing any number of argument
// only the last parameter in a function can be a rest parameters
///... are rest parameter
function displayName(title,...name){
    document.write(title+" ");
    document.write(name+"<br>")
    document.write(Array.isArray( (name))+"<br>");
    for (let em of name){
        document.write(em);
    }

}
const title="Engineer";
displayName(title,'Harsh');
displayName(title,'praveen','hks','john');




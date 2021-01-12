// Extract array element as individual element
// but rest parameter display that as Array


function displayName(title,...name){
    document.write(title+" ");
    document.write(name+"<br>")
    document.write(Array.isArray( (name))+"<br>");
    for (let em of name){
        document.write(em);
    }

}
const title="Engineer";
let emp=['harsh','ram','shyam','smith'];
displayName(title,...emp);// here ... are spread operator
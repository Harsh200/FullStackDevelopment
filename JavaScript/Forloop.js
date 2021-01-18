
//for loop
let empname=['harsh','purna','rajeev'];

for(let i=0;i<empname.length;i++){
    document.write(empname[i]+"<br>");
}

//for in loop
for (let a in empname){
    document.write(a+"<br>");
    document.write(empname[a]+"<br>");
}

let emp={
    eid:1,
    ename:'hks',
    ecity:'bangalore'
}

for(let a in emp){
    document.write(a+"<br>")
    document.write(emp[a]+"<br>");
}

// for of loop, only work on iterable, it not works for objects
for(let name of empname){
    document.write(name+"<br>");
}

let employ=[
    {eid:1,ename:'harsh'},
    {eid:2,ename:'purna'}

]
for (let i of employ){
    for(let e in i){
        document.write(i[e]+"<br>");
    }
}
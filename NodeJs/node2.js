let ans=require('./httpModule');
console.log(`Value of a is ${ans.a}`);
console.log(`Value of b is ${ans.b}`);
console.log(`Value of add is ${ans.add}`);
console.log(`Employee object contains is ${ans.emp.eid} ${ans.emp.ename} `);
console.log(`Value of c is ${ans.c}`);
ans.emp.eid=4;// Modification is also allow
console.log(`Employee object contains is ${ans.emp.eid} ${ans.emp.ename} `);


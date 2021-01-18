let path=require('path');
console.log(path);

let p1='/uplatz/contact/contact.html';
console.log(path.basename(p1));
console.log(path.delimiter);
console.log(path.dirname(p1));
//console.log(path.filename(p1));
console.log(path.extname(p1));
console.log(path.isAbsolute(p1));

let p2='/contact';
let p3='form.html';
console.log(path.join(p2,p3));


//Url module splits up a web address into a readable parts
// url.format(): returns a formatted url string
//url.parse(): returns a url objects
//url.resolve(): resolves a url

let url=require('url');
//console.log(url);
let requirement='http.//www.uplatz.com/contact.html?username=harsh&password=root&mobile=9999999999';
let ans=url.parse(requirement);
console.log(ans);
console.log(ans.hostname);
console.log(ans.path);
console.log(ans.search);
console.log(ans.query);
console.log(ans.href);
console.log(ans.query.username);

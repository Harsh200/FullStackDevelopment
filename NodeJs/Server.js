let http=require('http');

let fs=require('fs');
let server=http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/HTML'})
    res.write('<h1 style="color: blue">Welcome</h1>');
    //console.log(req);
    //console.log(res);
    //console.log(req.url);
    res.write('<h1>'+req.url+'</h1>'); //Write on browser
    res.write('<h1>'+"Welcome with Nodemon"+'</h1>'); //Write on browser
    //fs.createReadStream('./demo.html').pipe(res); // read from another file with res.end()

    //Show Json Data

    let emp={
        eid:1,
        ename:'harsh',
        ecity:'bangalore'
    }
    res.write(JSON.stringify(emp));

    console.log(http.STATUS_CODES); // Display Http status codes
    console.log(http.METHODS); // Display Http Methods
    res.end();



});

server.listen(3000,()=>{
    console.log('Server listening on port 3000');
})

/*
Response status code
100-199: information
200-299: Success status code
300-399: Redirection
400-499: Incomplete web resource program
500-599: Server Failure
 */
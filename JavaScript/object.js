let emp={
    eid:1,
    ename:'harsh',
    ecity:'bangalore',
    emails:['harsh@gmail.com','harsh@tcs.com'],
    isSenior:function (experience)
    {
        return experience>=5;
    },
    address:{
        street:'ln colony',
        city:'budaun',
        state:'uttar pradesh'
    }
}

document.write(emp.ecity+"<br>");
document.write(emp.emails+"<br>");
document.write(emp.emails[0]+"<br>");
document.write(emp.isSenior(6)+"<br>");
document.write(typeof emp+"<br>");
document.write(`Employee name is ${emp.ename} <br>`);
document.write('harsh'+"<br>");
document.write(`Address of employee address is ${emp.address.state} ${emp.address.city} <br>`)
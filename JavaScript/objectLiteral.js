let firstname='harsh';
let lastname='saxena';
let person={
    fname:firstname,
    lname:lastname,
    firstname,
    lastname
}

document.write(`first name is ${person.fname} , last name is ${person.lname} <br>`);
document.write(`first name is ${person.firstname} , last name is ${person.lastname} <br>`);


function createPerson(firstname,lastname,age)
{
    let fullname=firstname+lastname;
    return {
        firstname:firstname,
        lastname:lastname,
        fullname:fullname,
        isSenior:function (){
            return age>55;
        }
    }
}

p1=createPerson('raj','saxena',76);
document.write(p1.fullname+" "+p1.firstname+" "+p1.lastname+" "+p1.isSenior());

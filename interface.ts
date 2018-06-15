interface IPerson {
    Firstname: string,
    Lastname: string,
    Age: number
}

function showUser(user: IPerson) {
    alert(` username: ${user.Firstname}, ${user.Lastname} & Age: ${user.Age}`);
}

var user = {Firstname:'Arun',Lastname:'kumar', Age:35};
showUser(user);

user = {Firstname:'Rudhra', Lastname:'Darshan', Age: 4};
showUser(user);
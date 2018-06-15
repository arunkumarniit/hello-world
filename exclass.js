var Users = /** @class */ (function () {
    function Users(firstname, lastname, contactno, Age) {
        this.Age = Age;
        this.FirstName = firstname;
        this.LastName = lastname;
        this.ContactNo = contactno;
    }
    Users.prototype.ShowUserDetails = function () {
        var message = "Name: " + this.FirstName + " " + this.LastName + " of " + this.Age + " & " + this.ContactNo;
        alert(message);
    };
    return Users;
}());
// let arun = new Users();
// arun.FirstName ="Arun";
// arun.LastName ="Kumar";
// arun.ContactNo=12345;
// arun.ShowUserDetails();
var arun = new Users("Arun", "kumarL", 12345, 35);
//arun.ShowUserDetails();

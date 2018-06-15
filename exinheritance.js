//import {Users} from './exclass'
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, contactNo, age, designation, joiningdate) {
        var _this = _super.call(this, firstName, lastName, contactNo, age) || this;
        _this.Designation = designation;
        _this.JoiningDate = joiningdate;
        return _this;
    }
    Employee.prototype.showEmployeeDetails = function () {
        var message = "\n        Name: " + this.FirstName + " " + this.LastName + " " + this.Age + " " + this.ContactNo + " \n        " + this.Designation + " " + this.JoiningDate + "\n        ";
        alert(message);
        _super.prototype.ShowUserDetails.call(this);
    };
    return Employee;
}(Users));
var emp = new Employee('Arun', 'KumarL', 111111, 35, 'Cslt', '21 Jun 2010');
emp.showEmployeeDetails();

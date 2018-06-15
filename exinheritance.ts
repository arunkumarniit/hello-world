//import {Users} from './exclass'
 

class Employee extends Users{
    Designation: string;
    JoiningDate: string;

    constructor(firstName:string, lastName:string, contactNo:number, age:number, designation:string, joiningdate:string){
        super(firstName,lastName,contactNo, age);
        this.Designation= designation;
        this.JoiningDate = joiningdate;
    }

    showEmployeeDetails(): void {
        let message: string =`
        Name: ${this.FirstName} ${this.LastName} ${this.Age} ${this.ContactNo} 
        ${this.Designation} ${this.JoiningDate}
        `;
        alert(message);
        super.ShowUserDetails();
    }
}

let emp = new Employee('Arun','KumarL',111111,35,'Cslt', '21 Jun 2010');
emp.showEmployeeDetails();
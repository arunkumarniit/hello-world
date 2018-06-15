class Users {
    public FirstName: string;
    LastName: string;
    ContactNo: number;
    constructor(firstname:string, lastname:string, contactno:number, public Age: number){
        this.FirstName = firstname;
        this.LastName = lastname;
        this.ContactNo = contactno;
    }
    ShowUserDetails(){
        let message: string = `Name: ${this.FirstName} ${this.LastName} of ${this.Age} & ${this.ContactNo}`;
        alert(message);
    }
}

// let arun = new Users();
// arun.FirstName ="Arun";
// arun.LastName ="Kumar";
// arun.ContactNo=12345;
// arun.ShowUserDetails();


let arun = new Users("Arun","kumarL",12345, 35);
//arun.ShowUserDetails();
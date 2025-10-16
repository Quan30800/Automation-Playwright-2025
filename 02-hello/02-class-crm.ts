class customer {
    // thuoc tinh chung
    id: number;
    name: string;
    email: string;
    phone: string;

    // constructo 1 method dc goi khi tao doi tuong moi tu class - ham khoi tao
    constructor(id: number, name: string, email: string, phone: string) { 
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
    }
    displayInfor(){
        console.log(`Customer Info:
      ID: ${this.id}
      Name: ${this.name}
      Email: ${this.email}
      Phone: ${this.phone}`)
    }
    
    updateEmail(newEmail: string){
        this.email = newEmail; 
        console.log( `new email has been update to : ${newEmail} `);
    }
}

let newCustomer = new customer(1 , "Nguyen Van A", "NguyenvanA@gmail.com", "09066213" ); 
newCustomer.displayInfor();
newCustomer.updateEmail("abc@gmail.com"); 


///
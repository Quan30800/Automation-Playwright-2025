//Cach 1 ko dung class
// const nameStudent = "tu Anh";
// const countryStudent1 = " HCM";

// const nameStudent1 =  " Minh Quan";
// const countryStudent2 = "HN";

// // cach 2 ko dung class
// let student1 = {
//     name: "Tu Anh",
//     country: "HCM"
// }

// let student2 = {
//     name: "Tu Minh Quan",
//     country: "HN"
// }


// Dung class
// Dung camel case khi khai bao bien
// dung PascalCase khi dung class 
class Student {
    // thuoc tinh chung
    name: string;
    country: string;

    // constructo 1 method dc goi khi tao doi tuong moi tu class - ham khoi tao
    constructor(name: string, country: string) { 
            this.name = name;
            this.country = country;
    }
}

// tao 1 cai object student 1 tu class Student 
    let student1 = new Student("Nga", "HP"); 

console.log("Student object:", student1);
console.log("Name:", student1.name);
console.log("Country:", student1.country);



class Product1 {
    name: string;
    color: string;
    constructor(name: string, color: string) {
        this.name = name ;
        this.color = color;
    }
    printProductname(){
        console.log(`Product is : ${this.name}`)
    }

    getColorProduct(color: string){
        console.log(`${this.name} is ${color}`)
    }

    getissueProduct(issue?: string){
         if(issue){
            console.log(`${this.name} have ${issue}`);
         }
         else {
            console.log('nothing');
         }
    }

}
   

let Product = new Product1("Vi", "Pink");

Product.printProductname();
Product.getColorProduct("red");
Product.getissueProduct("issue");
const student ={ 
    id: 10,
    name : "Alex",
    age : 18
}

// for (let property in student) {
//     console.log(property);
//     console.log(student[property]);  //student["id"]
// }



for (const property in student) {
    console.log(`Property: ${property}, value: ${student[property]}`);
}

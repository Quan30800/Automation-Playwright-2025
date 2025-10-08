const sv1 = {
    'id' : 1,
    'name' : "Alex",
    'age' : 18
}

const sv2 = {
    'id' : 2,
    'name' : "Nagi",
    'age' : 19
}

const sv3 = {
    'id' : 3,
    'name' : "Yorichi",
    'age' : 20
}

console.log(`-Thông tin SV1: ${sv1.id}, ${sv1.name}, ${sv1.age}`); 
console.log(`-Thông tin SV1: ${sv2.id}, ${sv2.name}, ${sv2.age}`); 
console.log(`-Thông tin SV1: ${sv3["age"]}, ${sv3["id"]}, ${sv3["name"]}`); 

const student2 = {
    id: 1,
    name: "Alex",
    address: {
        province: "Ha Noi",
        isCapital: true,
        country: "Viet Nam"
    }
}
console.log(student2.address.province);
console.log(student2["address"].isCapital);
console.log(student2["address"]["country"]);
console.log(student2);
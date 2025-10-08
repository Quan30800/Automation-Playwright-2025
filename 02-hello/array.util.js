//1. map : tao ra mot 1 mang moi dua tren tung phan tu cua mang goc
// let number = [1, 2, 3, 4];
// let newNumber = number.map(num => num * 2)
// console.log (newNumber);

//2. filer() : tao ra mang moi chứa những phần tử thỏa mãn điều kiện trong hàm
let number = [1, 2, 3, 4];
let newNumber = number.filter(num => num % 2 === 0);
console.log(newNumber);

//3. find() : tra ve giá trị của các phần tử đầu tiên của mảng thỏa mãn điều kiện tonr hàm,
//nếu ko phân tử tào thỏa mãn thì trả ra undefined

let number1 = [1, 2, 3, 4, 5 , 6];
let newNumber1 = number1.find(num => num % 2 === 0);
console.log(newNumber1);

//4. reduce() : trả về 1 giá trị duy nhất (từ trái qua phải) - Cong tong tat ca phan tu trong mang
let number2 = [1, 2, 3, 4, 5 , 6];
let newNumber2 = number2.reduce((total, num) => total + num, 0);  // co the trong tru nhan chia
console.log(newNumber2);

//5. every
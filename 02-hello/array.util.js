//1. map : tao ra mot 1 mang moi dua tren tung phan tu cua mang goc
let number = [1, 2, 3, 4];
let newNumber = number.map(num => num * 2)
console.log (newNumber);git

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

let numbers = [1, 2, 3, 4, 5 ,6];
`let total = 0; 
`
for ( const nums of numbers){
    total += nums;
}

//5. some(): kiem tra xem co it nhat 1 phan tu trong mang thoa man dieu kien trong ham hay ko. tra tru/false 
let number3 = [1, 1, 3, 1];
let hasEven = number3.some(num => num %2 ===  0);
console.log(hasEven);

//6. every(): kiem tra cac phan tu co thoa man dieu kien ko, tra ra true/ false.

let number4 = [2,4,,6,8];
let hasEven1 = number4.every(num4 => num4 % 2 === 0 );
console.log(hasEven1);


//push(). Them 1 phan tu vao cuoi cung, tra ve do dai moi cho mang   ( push = update / concat = tao ra mang moi ) 
let So = [ 1, 2 ,3 ,4 ,5 ]; 
so.push(6);
console,log(So);

//shift(). Loai bo phan tu dau tien cua mang va tra ve phan tu bi loai bo .
let newSo = So.shift();
console.log(newSo); //1
console.log(So); //2, 3 ,4 ,5 ,6

//sort(): sap xep cac phan tu cua mang theo tu tu tang dan// giam dan
 
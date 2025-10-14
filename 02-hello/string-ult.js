//1. trim() dung de loai bo khoang trong ở đầu và cưới
let str = " Javascript is awasome "
console.log(str.trim());

//2. toLowerCase() và toUpperCase() chuyen doi tat ca cac ky tu trong chuoi thanh Thuong/ Hoa
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//3. include() tra ve true/ false. dung de kiem tra chuoi co chua chuoi con hay ko
// => tra ve true/ false

console.log(str.includes("awasome"));
console.log(str.includes("awesome"));

//4. replace() : dung de thay the mot chuoi 

str = str.replace("awasome", "fun")
console.log(str);

//5. split(): chia 1 chuoi than array cac chuoi con dua tren ky tu phan tach
let words = str.split(" ");
const emails = "email@gmail.com , email12@gfmail.com";
let newEmail = emails.split(",");
console.log(newEmail); 

//6. substring() trả về 1 phần của chuỗi, bắt đầu từ index được chi đỉnh hoặc đến cuối chuỗi
let strl = "HELLO WORD";
console.log(strl.substring(0, 5));
//=> đếm index của các ký tự trong string

//7. IndexOf() : tra ve vị trí xuất hiện đầu tiên của chuỗi, nếu ko tìm thấy nó trả vể -1
let str2 =  "HELLO WORD";
console.log(str2.indexOf("W"));
// tra ve 6


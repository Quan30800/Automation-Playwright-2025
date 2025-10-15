// // EVERY

// // const scores = [ 74, 90, 78];
// // const allScoresAbove70 = scores.every(score=> score > 70);
// // console.log (allScoresAbove70);

// // // 

// // const age = [ 18, 21, 16, 25];
// // const allAgeAbove15 = age.every(age => age > 15);
// // console.log(age);

// // //

// // const words =  [ "apple", "banana", "date"];
// // const maxLengAbove3 = words.every( words => words.length > 3  );
// // console.log(maxLengAbove3);




// // // FIlTER
// // const studentScore = [ 85, 90, 78];
// // const filterScore = studentScore.filter(scores => scores > 80); 
// // console.log(filterScore);

// // //
// // const Ages = [ 18,21, 16, 25];
// // const filterAges = Ages.filter( age => age >= 18);
// // console.log(filterAges);

// // //

// // const Words =  [ "apple", "banana", "date"];
// // const MaxLengAbove3 = Words.every( words => words.length > 5  );
// // console.log(MaxLengAbove3);


// // // FIND
// // const studentScore = [ 85, 90, 78];
// // const filterScore = studentScore.find(scores => scores > 80); 
// // console.log(filterScore);

// // //
// // const Ages = [ 18,21, 16, 25];
// // const filterAges = Ages.find( age => age >= 20);
// // console.log(filterAges);

// // //

// // const Words =  [ "apple", "banana", "date"];
// // const MaxLengAbove3 = Words.find( words => words.length > 5  );
// // console.log(MaxLengAbove3);


// //MAP
// // const studentScore = [85, 90, 78];
// // let adjustedScores = [];

// // studentScore.forEach(score => {
// //   if (score < 90) {
// //     adjustedScores.push(score * 1.10);
// //   } else {
// //     adjustedScores.push(score * 0.95);
// //   }
// // });

// // console.log(adjustedScores);

// // . Dùng map (cách chuẩn nhất để biến đổi mảng)
// // const studentScore = [85, 90, 78];

// // const adjustedScores = studentScore.map(score => {
// //   if (score < 90) {
// //     return score * 1.10;
// //   } else {
// //     return score * 0.95;
// //   }
// // });

// // console.log(adjustedScores);


// // 👉 map luôn trả về mảng mới, không cần push.

// // // 2. Dùng for + gán trực tiếp theo index

// const studentScore = [85, 90, 78];
// let adjustedScores = [];

// for (let i = 0; i < studentScore.length; i++) {
//   if (studentScore[i] < 90) {
//     adjustedScores[i] = studentScore[i] * 1.10;
//   } else {
//     adjustedScores[i] = studentScore[i] * 0.95;
//   }
// }

// console.log(adjustedScores);

// // Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy chuyển đổi mảng các số thành mảng các chuỗi. 

// const number = [1, 2, 3, 4];

// const newNumber = number.map(num => String(num));
// console.log(newNumber);

// 👉 Bài 3:Tạo một mảng numbers chứa các số: 1, 2, 3. Hãy nhân đôi mỗi giá trị trong mảng.

// const SO = [ 1,2 ,3];
// const newSo = SO.map( so => so * 2 );
// console.log(newSo); 



// PUSH

const SO = [1, 2, 3];

// push trả về độ dài mới của mảng
const newLength = SO.push(4);
// console.log(newLength); // 4

console.log(SO); // [1, 2, 3, 4]


//POP
// pop sẽ loại bỏ phần tử cuối cùng và trả về phần tử đó
// const poppedElement = SO.pop();
// // console.log(poppedElement); // 4

// console.log(SO); // [1, 2, 3]

// //
// const Name = [ "Alice", "Bob", "Charlie"]
// Name.push("David");
// console.log(Name); 


// // REDUCE
// const studentScore = [85, 90,78]
// const score = studentScore.reduce((total, num) => total + num, 0 );
// console.log(score) 
// //
// const studentMul = [1,2,3,4 ]
// const scoreMul = studentMul.reduce((Mul, num) => Mul * num, 1 );
// console.log(scoreMul) 
// //
// const expenses = [50, 100, 150]
// const totalEx = expenses.reduce((total, num) => total + num, 0 );
// console.log(totalEx) 



// // SHIFT/UNSHIFT
// const number = [1,2,3,4 ];
// const Newnumber = number.shift();
// console.log(Newnumber);
// //
// const numberMoi = number.unshift(1);
// console.log(numberMoi);
// //
// const Name = ["Bob", "Charlie"]
// Name.unshiftshift("Alice");
// console.log(Name);



//SOME
// const studentScore = [ 85,90,78];
// const newScore = studentScore.some(num => num > 80);
// console.log(newScore);

// const age = [18,21,16,25];
// const newAge = age.some( num => num < 18);
// console.log(newAge);

// const words = [ "apple", "banana", "cherry", "date"];
// const newWords = words.some( num => num.length > 5 );
// console.log(newWords);

//SPLIT
const name = "Nguyễn Văn A";
const splitName = name.split(" ");
console.log(splitName); 

const email = "example@gmail.com, example023gmail.com, example03@gmail.com";
const Splitemail = email.split(", ");
console.log(Splitemail);

const date = "2024-05-19";
const splitdate = date.split("-");
console.log(splitdate);


//INCLUDE
const checkName = name.includes("Nguyễn");
console.log(checkName);

const email2 = "exemple3g,ail.com"
const emalll = email2.includes("@");
console.log(emalll);



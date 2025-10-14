// EVERY

// const scores = [ 74, 90, 78];
// const allScoresAbove70 = scores.every(score=> score > 70);
// console.log (allScoresAbove70);

// // 

// const age = [ 18, 21, 16, 25];
// const allAgeAbove15 = age.every(age => age > 15);
// console.log(age);

// //

// const words =  [ "apple", "banana", "date"];
// const maxLengAbove3 = words.every( words => words.length > 3  );
// console.log(maxLengAbove3);




// // FIlTER
// const studentScore = [ 85, 90, 78];
// const filterScore = studentScore.filter(scores => scores > 80); 
// console.log(filterScore);

// //
// const Ages = [ 18,21, 16, 25];
// const filterAges = Ages.filter( age => age >= 18);
// console.log(filterAges);

// //

// const Words =  [ "apple", "banana", "date"];
// const MaxLengAbove3 = Words.every( words => words.length > 5  );
// console.log(MaxLengAbove3);


// // FIND
// const studentScore = [ 85, 90, 78];
// const filterScore = studentScore.find(scores => scores > 80); 
// console.log(filterScore);

// //
// const Ages = [ 18,21, 16, 25];
// const filterAges = Ages.find( age => age >= 20);
// console.log(filterAges);

// //

// const Words =  [ "apple", "banana", "date"];
// const MaxLengAbove3 = Words.find( words => words.length > 5  );
// console.log(MaxLengAbove3);


//MAP
const studentScore = [85, 90, 78];
let adjustedScores = [];

studentScore.forEach(score => {
  if (score < 90) {
    adjustedScores.push(score * 1.10);
  } else {
    adjustedScores.push(score * 0.95);
  }
});

console.log(adjustedScores);

// . Dùng map (cách chuẩn nhất để biến đổi mảng)
const studentScore = [85, 90, 78];

const adjustedScores = studentScore.map(score => {
  if (score < 90) {
    return score * 1.10;
  } else {
    return score * 0.95;
  }
});

console.log(adjustedScores);
👉 map luôn trả về mảng mới, không cần push.

// 2. Dùng for + gán trực tiếp theo index

const studentScore = [85, 90, 78];
let adjustedScores = [];

for (let i = 0; i < studentScore.length; i++) {
  if (studentScore[i] < 90) {
    adjustedScores[i] = studentScore[i] * 1.10;
  } else {
    adjustedScores[i] = studentScore[i] * 0.95;
  }
}

console.log(adjustedScores);
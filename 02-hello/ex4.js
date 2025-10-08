const chieuCao = 175;

const canNangLyTuong = (chieuCao % 100)  *9/10;
const canNangToiDa = chieuCao % 100;
const canNangToiThieu = (chieuCao % 100)  *8/10;

console.log("Can nang ly tuong la " + canNangLyTuong +"," +
      " Can nang toi da la " + canNangToiDa +"," + " Can nang toi thieu la " + canNangToiThieu  );
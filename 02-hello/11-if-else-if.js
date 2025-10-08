const score = 9.5;

// 0->5 = Yeu
// 5->7 = TB
// 7->9 = Kha
// 9-> 10 = Gioi 

if (score >=0 && score <= 5) {
    console.log("học ngu vcl");

} else if (score > 5 && score <=7){
    console.log("dốt");
} else if ( score > 7 && score <= 9){
  console.log("tạm");
} else {
    console.log("được vcl");
}
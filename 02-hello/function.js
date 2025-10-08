function sayHello () {
    console.log("sayHello");
}

sayHello(); 
sayHello(); 
sayHello(); 

// Can in ra 2 lan tu 1 - 10 say Hello

for(let i = 1; i<= 10; i++){
    console.log(i);
}
console.log("Hello"); 

for(let i = 1; i<= 10; i++){
    console.log(i);
}
console.log("Hello"); 

// Dung Function

function printNumber () {
    for(let i = 1; i<= 10; i++){
    console.log(i);
}
console.log("Hello"); 
}

printNumber();
printNumber();

parameters
function printNumber (n){
    for( let i = 1; i <= n ; i++ ){
        console.log(i);
    }
}

function compare (a, b){
    if ( a > b){
        return a ;
    }
    return b
}

const max = compare( 10, 15);
console.log(max);


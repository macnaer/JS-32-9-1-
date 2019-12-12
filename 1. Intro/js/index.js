console.log("Hello world!");

// var a = 5;   // ES 5
// let b = 10;   // ES 6
// let c = "Bill";


// console.log("B => ", b, " type => ", typeof(b));
// console.log("C => ", c, " type => ", typeof(c));

// c = 100500.2143;
// console.log("C afer = ", c, " type => ", typeof(c));

// let exit = false;
// console.log("exit => ", exit, " type => ", typeof(exit))

// let name = parseInt(prompt("Enter your name: "));
// document.write(name, " type => ", typeof(name));

// let a = parseInt(prompt("Enter first digit: "));
// let b = parseInt(prompt("Enter second digit: "));

// if (a > b){
//     document.write(a, " > ", b);
// }else if( a < b){
//     document.write(a, " < ", b);
// }
// else{
//     document.write(a, " = ", b);
// }

// let c = prompt("Enter first: ");
// let d = parseInt(prompt("Enter second: "));

// if (c === d){
//     document.write("True!");
// }
// else{
//     document.write("False!")
// }

// let day = prompt("Enter days number");

// switch(day){
//     case '1': document.write("Monday");
//     break;
//     default: document.write("R.T.F.M.");
//     break;
// }


let arr = [1,55, "Bill", true, [0, "Test", ["Internal arr", "?"]], {
    name:"Stive",
    age: 45
}]



let newElem = 100500;
arr.push(newElem);

console.log(arr);

// document.write("<h2>", b, "</h2>");
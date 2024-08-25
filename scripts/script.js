console.log("Hello World - Clinton Hockenberry")

//Note Format

//Creating String Variables
let myName = "Clinton";
let lastName = "Hockenberry";
console.log(myName + " " + lastName)

//Creating Numerical Variables
let myAge = 31;
console.log(myAge)
let grade = 5.62;
console.log(grade)

//Creating Boolean Variables

let isAProfessor = true;
let isAStudent = false;
console.log(isAProfessor)

console.log("My name is " + myName + " " + lastName + "and I am " + myAge + " years old")

let number1 = 7;
let number2 = 3;
let addition = number1 + number2
console.log(number1 + " + " + number2 + " = " + addition)

let subtraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + subtraction)

let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication)

let division = number1 / number2;
console.log(number1 + " / " + number2 + " = " + division)

const pi = 3.1416;
let radius = 3;
let area = pi * radius * radius;
console.log("The area of a circle with a radius of " + radius + " is " + area + ".")

//Test for inputs

function doMath(){
let numberOne = document.getElementById("numberOne").value;
let numberTwo = document.getElementById("numberTwo").value;
document.getElementById("sum").innerHTML=numberOne - numberTwo;
}

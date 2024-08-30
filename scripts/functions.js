/*
function practice(){
    let num1=Number(prompt("Enter number 1"))
    let num2=Number(prompt("Enter number 2"))
    if(num1 > num2){
        console.log("Number 1 is greater than number 2");
    }else if(num1 < num2){
        console.log("Number 1 is less than number 2");        
    }else if(num1 == num2){
        console.log("Number 1 is equal to number 2");
    }
}
*/
/*
function getDriverLicense(){
    let driverAge=Number(prompt("Enter your age"));
    if(driverAge>=18){
        document.write("Congratulations! You can get your driver's license.");
    }else{
        document.write("Sorry, you are too young to get a driver's license.");
    }
}
*/

function miniGame(){
    console.log("Mini Game");
    let randNum = Math.floor(Math.random()*10)+1;
    let guess = Number(prompt("Please guess the number between 1 and 10"));
    if(guess==randNum){
        document.getElementById("results").innerHTML="Congratulations! You guessed the number";
    }else{
        document.getElementById("results").innerHTML="Sorry, that is not correct. The correct number is " + randNum;
    }
}

//Database sim
let dbEmail = "email@email.com";
let dbPass = "password";

function login(){
    let email = prompt("Enter your email:");
    let password = prompt("Enter your password");
    if((email==dbEmail) && (dbPass==password)){
        document.getElementById("loginSolution").innerHTML="Welcome to the system"
    }else{
        /*IMPORTANT - BACKTICK (far left below escape)*/
        document.getElementById("loginSolution").innerHTML=`
            <p class = 'alert-error'>Invalid credentials</p>
            <p class = 'alert-error'>Try again</p>
            `
    }
}
let startNum = 0
function increaseNum(){
    document.getElementById("numDisplay").innerHTML=++startNum;
}
function decreaseNum(){
    startNum=startNum-1
    document.getElementById("numDisplay").innerHTML=startNum;
}
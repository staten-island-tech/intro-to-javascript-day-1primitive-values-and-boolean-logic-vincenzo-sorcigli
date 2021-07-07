// String Testing 
/*
let string = "string";
const yeah = "YEAH";
let sentence = "Hello " + "Vicky";
let sentence2 = " and also Angel";
//let combine = sentence + sentence2;
combine = `${sentence}${sentence2}`;

let student1 = "Sandra";
let student2 = "Kelly";
let courseName = "CS";
let teacherName = "Whalen";
let longSentence = `${student1} and ${student2} will be taking ${courseName} with ${teacherName} next year.`; 
console.log(longSentence);
*/



//Integers Testing
/*
let year = 2020; //not a string
let nextYear = 2020 + 1;
let lastYear = year - 1
let past = year / 2;
let farFuture = year * 5;
*/


               

//Booleans (true or false) and Null vs Undefined Testing
/*
let trueStatement = true;
let falseStatement = false;
let undefinedVar; 
console.log undefinedVar; //undefined; has been declared
console.log(nonExistent); //null; has never been declared
console.log(truuStatement); //null can help us find spelling mistakes
*/




//Logic and If Statements Testing

//let student = "Karen";
//let age = 17;
//console.log(student === "Karen") //true
//console.log(student === "karen") //false 
//console.log(student == "karen") //false 

//console.log(age === "17") //false
//console.log(age == "17")  //true
// What this tells us: 
// ===: same value AND same type
// ==: just same value

//let age = 16;
//let name = "Kristy";
//console.log(age < 17);
//console.log(age <= 17);
//console.log(age > 17);
//console.log(age == 16 || age == 17); // ||: or. in this case, age is 16 OR 17.
//console.log(age == 16 && age == 17); // &&: and. in this case, age is 16 AND 17.
//console.log(age == 16 && name === "Kristy")
//console.log(age !== 16); // !== not equal to

/* let age = 18;
if (age < 18){
    console.log("ur a child")
}
else if (age >= 18){
    console.log("ur an adult")
}
 */

 /* let school = "elementary";
 if(school == "elementary"){
     console.log("ur in elementary school")
 }
 else if (school = "middle"){
     console.log("ur in middle school")
 }
 else { //else needs no argument
     console.log("ur in high school")
 } */






 //Challenges

let color = "yellow"
if (color === "red"){
    console.log("STOP!");
}
else if (color === "yellow"){
    console.log("Slow down");
}
else{
    console.log("Go");
}

let kristyIntolerant = true;
let baobaoIntolerant = false;
if (kristyIntolerant === true && baobaoIntolerant === true){
    console.log("We only need almond milk")
}
else if (kristyIntolerant === true || baobaoIntolerant === true){
    console.log("We need almond milk and normal milk");
}
else{
    console.log("We only need normal milk")
}

let temperature = 10000;
if (temperature < 68){
    console.log("It's too cold!");
}
else if (68 <= temperature && temperature <= 72){
    console.log("Perfect!");
}
else if (73 <= temperature && temperature <= 76){
    console.log("It's getting warm...");
}
else{
    console.log("It's too hot!")
}  


















// -----
// Day 2
// -----

// Functions notes

/* function test(){
    console.log("this is a test");
}
test();

function functionWithArgument(argument){
    console.log(argument);
}
functionWithArgument("i filled in something for the argument so now something is showing");

function add(x, y){
    return x + y;
    //some code here that won't run
    //return immediately ends the function
}
console.log(add(2, 7));

//you can make variables functions
let z = function add(x, y){
    return x + y;
    //some code here that won't run
    //return immediately ends the function
}
console.log(z(1,11)); */




//scoping and closures notes

//Let vs. const
let x = "x" //value is able to be changed
const y = "y" //value is NOT able to be changed. 
//we use const 99% of the time

/* //abstractions
const hello = function(){
    alert("hello");
}
const bye = function(){
    alert("bye");
}
function beatles(){
    hello();
    bye();
}
beatles(); */
//making code smaller by making things functions

//scoping
//-------
/* //global scope
function makeFunc(){
    //function scope
    const name = "Michelle";
    console.log(name);
}
function hello(){
    const name = "Rhianna";
    console.log(name);
}
hello();
makeFunc(); */
//the same variable name can exist in multiple functions

//closures notes
//inside a function, nothing can be impacted by the global scope
//inner functions still have access to the variables in its outer function

/* function makeFunc(){
    //function scope
    const name = "Michelle";
    function displayName(){ //we cannot call functions inside function directly
        alert(name); //still has to access variable name
    }
    return displayName; //returning the inner function
}
const myFunc = makeFunc();
myFunc(); */





//Arrays notes
/* const names = ["Michelle","Rhianna","Vincenzo","Mia","Jolie"]; //"Michelle" is item 0. Arrays in javascript start at 0.
names.push("Brady"); // you can add to arrays. push is an "array method"
// MDN has access to all array methods */





// Arrow functions notes
/* const names = ["Michelle","Rhianna","Vincenzo","Mia","Jolie"];
names.forEach(name => console.log(name));
// two key differences: 
// 1. always returned
// 2. "this" is changed */





// Spread operator notes
/* const numbers = [1, 2, 3];
const add = function(x, y, z){
    return x + y + z;
}
console.log(add(...numbers));

const numbersAgain = [10, 13, 1, 78, 1000];
const biggestNum = Math.max(...numbersAgain);
console.log(biggestNum); */





//Challenges

let names = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];

// Challenge 1
//filter names whose length is less than 5
const noShortNames = names.filter(name => name.length >= 5);
console.log(noShortNames);

// Challenge 2
// 1. does it include "Junshen"?
// 2. check for "Allen" OR "Saava" - use "some"

const checkForName = function(name){
    return names.includes(name);
}
console.log(checkForName("Junshen"));

const coolFunction = function(name1,name2){
    return names.some(name1,name2);
}
console.log(coolFunction("Saava","Alan"));
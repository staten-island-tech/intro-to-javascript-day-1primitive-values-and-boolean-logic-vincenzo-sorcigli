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
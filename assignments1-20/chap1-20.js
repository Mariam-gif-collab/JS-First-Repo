// ////////// task 1//////////
// alert("Hello Miss Ruhama Gul");

// ///////////////////task2//////
// alert("Error!Please enter a valid  Password");

// ///////////////task3///////
// alert("Welcome to JS Land...\nHappy Coding");

// ///////////task4 ///////
// alert("Welcome to JS Land...");
// alert("Happy Coding!\nPrevent this page from creating additional dialogs");

// ///////////task5/////
// console.log(alert("Hello.. I can run JS through my web browsers console"));

// ///////////task 6 //////////
// alert("Here Is My Portfolio ...");

////////////////chap2  ///////////////


// /////////////task 1 ///////
// var username;

// /////////////task 2 ///////

// var myname = "Mariam Danish"

// /////////////task 3 ///////
//  let message;
//  let message ="hello World";
//  alert(message);

// /////////////task 4 ///////
// let studentName = ("John doe");
// let age =("15 years old");
// let course =("Certified Mobile App Development");
// alert( studentName);
// alert(age);
// alert(course);

// ///////////task 5 //////////
// var msg = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(msg);

// ///////////task 6 //////////
// var email = "example@example.com";
// alert("My email address is " + email);

// ///////////task 7 //////////
// let book = "A Smarter Way to learn JavaScript";
// alert ("I am Trying to learn from the book " + book);

// ///////////task 8 //////////
// document.writeln(`Yah! I Can Write HTML content through Javascript`);

 // ///////////task 9 //////////
//  let design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";
//  alert (design);

// /////////////////// chap3 //////////////

// ////////////////// task 1 //////////////////

// var age = 15;
//  alert("I am " + age + " Years old");

// ////////////////// task 2 //////////////////
//  var visitCount = 14;
//   alert("You have visited this site " +visitCount+ " times");

// ////////////////// task 3 //////////////////

// var birthYear = 1986;
// document.writeln(`My Birth year is` + birthYear);
//  document.writeln(`Data Type of my declared variable is number`);

// ////////////////// task 4 //////////////////

// var visitorName = "John Doe";
// var productTitle = "T shirts";
// var quantity = 5;
// var store ="XYZ clothing Store"
// document.writeln(visitorName + "ordered" + quantity + productTitle+ "on" + store);

// ////////////CHAPTER 4 //////////////////

// ////////////////// task 1 //////////////////

// var name = "Mariam", age = 25, city = "Karachi";

// ////////////////// task 2 //////////////////
// legal variable names////
// let userName;
// let age25;
// let _score;
// let $currency;
// let totalMarks;
// // illegal variable names
// let 25age;       // ❌ starts with a number
// let user name;   // ❌ contains a space
// let @value;      // ❌ invalid character
// let var;         // ❌ reserved keyword
// let student-id;  // ❌ hyphen not allowed

// ////////////////// task 3 //////////////////

// document.writeln(` <h1>Rules for naming JS variables</h1>
//     <p>  Variable names can only contain Letters (A–Z, a–z),digits (0–9), 
// underscore _ and dollar sign $.</p>
// <p> Variables must begin with a letter ,underscore _ or 
// dollar sign $. </p>
// <p> Variable names are case Sensitive</p>
// <p>Variable names should not be JS Reserved Keywords</p>`)


// /////////////CHAPTER 5 /////////////

// /////////////task 1 /////////////
// let sum=(3+5);
// document.writeln(`sum of 3 and 5 is equal to `+ sum);

// ////////////task 2 /////////////

// let sum=(3-5);
// document.writeln(`sum of 3 subtract 5 is equal to `+ sum);

// let sum=(3*5);
// document.writeln(`sum of 3 multiply 5 is equal to `+ sum);

// let sum=(3/5);
// document.writeln(`sum of 3 divide 5 is equal to `+ sum);

// let sum=(3%5);
// document.writeln(`remainder of 3 divide 5 is equal to `+ sum);

// /////////task 3///////////////

// a. Declare a variable
// var myVar;

// // b. Show the value of variable in your browser
// document.writeln("Value after variable declaration is: " + myVar + "<br>");

// // c. Initialize the variable with some number
// myVar = 5;

// // d. Show the initial value
// document.writeln("Initial value: " + myVar + "<br>");

// // e. Increment the variable
// myVar++;

// // f. Show the value after increment
// document.writeln("Value after increment is: " + myVar + "<br>");

// // g. Add 7 to the variable
// myVar = myVar + 7;

// // h. Show the value after addition
// document.writeln("Value after addition is: " + myVar + "<br>");

// // i. Decrement the variable
// myVar--;

// // j. Show the value after decrement
// document.writeln("Value after decrement is: " + myVar + "<br>");

// // k. Show the remainder after dividing by 3
// var remainder = myVar % 3;

// // l. Output the remainder
// document.writeln("The remainder is: " + remainder + "<br>");

//  //////////////////task 4 //////////////
// // Store ticket price in a variable
// var ticketPrice = 600;

// // Calculate cost of buying 5 tickets
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;

// // Show the result in the browser
// document.writeln("The cost of buying " + numberOfTickets + " tickets is " + totalCost + " PKR");

//  //////////////////task 5 //////////////

// var number = 5; // you can change this to any number
//  document.writeln("<h2>Multiplication Table of  5 </h2>");

// for(let i = 1; i<=10; i++){
//     document.writeln(number + "x" + i + "=" +(number * i)+ "<br>"

//     )
// };

// ////////////////task 6 //////////////////////

// a. Store a Celsius temperature
// var celsius = 25;

// // b. Convert to Fahrenheit
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");

// // c. Store a Fahrenheit temperature
// var fahrenheit2 = 77;

// // d. Convert to Celsius
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C");

// ////////////task 7 ///////////////////

// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Show the receipt in the browser
// document.writeln("Price of item 1 is " + priceItem1 + " PKR<br>");
// document.writeln("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.writeln("Price of item 2 is " + priceItem2 + " PKR<br>");
// document.writeln("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.writeln("Shipping Charges: " + shippingCharges + " PKR<br><br>");
// document.writeln("Total cost of your order is " + totalCost + " PKR");

//  //////////////////task 8 //////////////

// let totalMarks = 940;
// let marksObtained = 804;
// let percentage = (marksObtained * 100 / totalMarks);

// document.writeln("<h1>Mark Sheet </h1>"  + "<br>")
// document.writeln("total Marks: =" + totalMarks + "<br>")
// document.writeln("marks Obtained: ="+ marksObtained  + "<br>")
// document.writeln("percentage: =" + percentage  + "<br>")

//  //////////////////task 9 //////////////

// let $toPkr =(104.80*10) , riyaltopkr = (28*25);
// let totalPkr = ($toPkr + riyaltopkr);
// document.writeln("<h1>Currency in PKR </h1>"  + "<br>")
//  document.writeln("Total Currency in Pkr is: =" + totalPkr + "<br>");

//  //////////////////task 10 //////////////

// let sum = ( (5+5)* 10 / 2);
// console.log(sum);

//  //////////////////task 11 //////////////
// var currentYear = 2026;
//  let birthYear = 1998;
// let age =(currentYear - birthYear)
// document.writeln("<h1>Age Calculator </h1>"  + "<br>");
// document.writeln("current Year: =" + currentYear + "<br>");
// document.writeln("Birth Year: =" + birthYear + "<br>");
// document.writeln("Your Age is: =" + age + "<br>");

//  //////////////////task 12 //////////////



//  //////////////////task 13 //////////////


// var favoriteSnack = "chocolate chip cookies";
// var currentAge = 20;
// var maxAge = 80;
// var perDay = 2;

// var totalSnacks = (maxAge - currentAge) * 365 * perDay;

// document.writeln("You will need " + totalSnacks + " " + favoriteSnack + 
//                " to last you until the ripe old age of " + maxAge);

// ///////////////chap 6-9 /////////////
 //////////MATH EXPRESSIONS//////////

// QUESTION 1 //
// let a = 10;
// document.writeln("Result: <br>")
// document.writeln("The value of a is: " + a +"<br><br>");
// ++a;
// document.writeln("The value of ++a is: " + a +"<br>"+"Now the value of a is: " + a +"<br><br>");
// a++;
// document.writeln("The value of a++ is: " + a +"<br>"+"Now the value of a is: " + a+"<br><br>");
// --a;
// document.writeln("The value of --a is: " + a +"<br>" + "Now the value of a is: " + a +"<br><br>");
// a--;
// document.writeln("The value of a-- is: " + a +"<br>" + "Now the value of a is: " + a );

// QUESTION 2 //
// let a = 2;////1
// let b = 1;////- 0 + 1 + 1
// let result = --a - --b + ++b + b--; ////1 - 0 + 1 + 1
// document.writeln("a = " + a +"<br>"+ "b = " + b +"<br>" + "result = " + result);

// QUESTION 3 //
// var input = prompt("Enter your name...");
// if(input){
// var greeting= "Hello, " + input + "! Welcome to the site.";
// alert(greeting);
// };

// QUESTION 4 //
// let table = +prompt("Enter a number!",5);
// for(let i=1; i<=10; i++){
//     document.writeln(`${table} x ${i} = ${table*i} <br>`);
// };

// QUESTION 5 //
// let subject1 = prompt("Enter Subject 1 ");
// let subject2 = prompt("Enter Subject 2");
// let subject3 = prompt("Enter Subject 3");
// let marks = 100;


// ///////////////////chap 9-11 ////////////////

//////////USER INPUT & CONDITIONAL STATEMENT//////////

// QUESTION 1 //
// var userCity = prompt("Enter your city!");
// var city = "Karachi".toLowerCase();
// if(userCity === city){
// alert("Welcome to city of lights!");
// }else{
//     alert("Welcome");
// };

// QUESTION 2 //
// var userGender = prompt("Enter your gender");
// var gender = "Male".toLowerCase();
// if(userGender === gender){
// alert("Good Morning Sir");
// }else{
//     alert("Good morning Ma'am");
// };

// QUESTION 3 //
// var color = prompt("Enter traffic signal color (Red, Yellow, Green):");
// color = color.toLowerCase();
// if (color === "red") {
//     alert("MUST STOP!");
// }else if (color === "yellow") {
//     alert("Ready To Move");
// }else if (color === "green") {
//     alert("Move Now");
// };

// QUESTION 4 //
// let remainingFuel = +prompt("How much fuel is left in the car?(in litres)");
// remainingFuel = remainingFuel.toLowerCase();
// if(remainingFuel < 0.25){
//     (alert("Please refill the fuel in your car"));
// };

// QUESTION 5 //
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// };
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// };
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// QUESTION 6 //
// var marks1 = 55;
// var marks2 = 73;
// var marks3 = 62;
// var marksObtained = marks1 + marks2 + marks3;
// var totalMarks = 300;
// var percentage = (marksObtained/totalMarks)*100;
// var grade;
// var remarks;
// if(percentage >=80){
//     grade = "A-one";
//     remarks = "Excellent";
// }else if(percentage >=70){
// grade = "A";
// remarks = "Good";
// }else if(percentage >=60){
// grade = "B";
// remarks = "You need to improve";
// }else if(percentage <60){
// grade = "Fail";
// remarks = "Sorry";
// }
// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln("Total Marks: " + totalMarks +"<br>"+ "Marks obtained: " +(marks1+marks2+marks3) +"<br>"+"Percentage: "+percentage+"%"  +"<br>"+"Grade: "+grade+"<br>"+"Remarks: "+remarks);

// QUESTION 7 //
// let secretNum = 6;
// let input = +prompt("Guess the secret number!");
// if(secretNum === input){
// alert("Bingo!Correct answer.");
// }else if(input === secretNum+1){
// alert("Close enough to the correct answer.");
// };

// QUESTION 8 //
// var num = +prompt("Give a number");
// if(num%3===0){
// alert("This number is divisible by 3");
// }else{
//     alert("This number is NOT divisible by 3");
// };

// QUESTION 9 //
// var num = +prompt("Give a number");
// if(num %2 === 0){
// alert("This is an EVEN number.");
// }else{
// alert("This is an ODD number");
// };

// QUESTION 10 //
// var temp = +prompt("What is the temperature?");
// if(temp > 40){
// alert("It is too hot outside.");
// }else if(temp > 30){
// alert("The weather today is normal.");
// }else if(temp > 20){
// alert("Today's weather is cool.");
// }else if(temp > 10){
// alert("OMG!Today's weather is so cool.");
// };

// QUESTION 11 //
// let num1 = +prompt("Give first number");
// let num2 = +prompt("Give second number");
// let operation = prompt("Choose an operation(+,-,*,/,%)");
// let result;
// if(operation === "+"){
// result = num1 + num2;
// }else if (operation === "-") {
//     result = num1 - num2;
// } 
// else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         result = "Error! Division by zero is not allowed.";
//     }
// } 
// else if (operation === "%") {
//     result = num1 % num2;
// } 
// else {
//     result = "Invalid Operation!";
// }
// alert("Result: " + result);

// ////////////////Chap 12 -13 /////////////////////

// QUESTION 1 //
// let input = "A";
// if(input.length === 1){
// let ascii = input.charCodeAt(0);
// if(ascii >= 48 && ascii <=57){
//     document.writeln("The input is a number.")
// }else if(ascii >= 65 && ascii <= 90){
//     document.writeln("The input is an uppercase letter.")
// }else if(ascii >= 97 && ascii <= 122){
//     document.writeln("The input is a lowercase letter.")
// }else{
//     alert("Please enter a number or a letter.")
// }
// }else{
//     alert("Please enter a single character only.")
// }

// QUESTION 2 //
// let num1 = +prompt("Give number 1:");
// let num2 = +prompt("Give number 2:");
// if(num1 > num2){
//     document.writeln("The larger number is: " + num1);
// }else if(num1 < num2){
//     document.writeln("The larger number is: " + num2);
// }else{
//     document.writeln("Both numbers are equal.");
// };

// QUESTION 3 //
// let num = +prompt("Enter a number");
// if(num > 0){
//     document.writeln("This is a positive number.");
// }else if(num < 0){
//     document.writeln("This is a negative number.");
// }else{
//     alert("Please enter a valid number.");
// };

// QUESTION 4 //
// let input = prompt("Enter a single character");
// if(input && input.length === 1){
//     input = input.toLowerCase()
//     if(input === "a" || input === "e" || input === "o" || input === "i" || input === "u"){
//         alert(true);
//     }else{
//         alert(false);
//     }
// }else{
//     alert("Please enter only one character!");
// };

// QUESTION 5 //
// var pswd = 123456;
// var userPswd = +prompt("Enter your password");
// if(userPswd === null){
//     alert("Please enter your password:");
// }else if(userPswd === pswd){
//     alert("Correct!");
// }else{
//     alert("Incorrect password");
// };


// QUESTION 6 //
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }

// QUESTION 7 //
// var time = +prompt("Enter time based on 24 hour format(e.g. 1900)");
// if(time >= 0 && time < 1200){
// alert("Good Morning!");
// }else if(time >= 1200 && time < 1700){
// alert("Good afternoon!");
// }else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
// }else if(time >= 2100 && time < 2359){
//     alert("Good Night!");
// }else{
//     alert("Please enter time");
// };

// //////////////////chap 14 -16 /////////////

// QUESTION 1 //
// var studentNames = [];

// QUESTION 2 //
// var studentNames = new Array();

// QUESTION 3 //
// var strings = ["A" , "B" , "C" , "D"];

// QUESTION 4 //
// var numbers = [1 , 2 , 3 , 4 , 5];

// QUESTION 5 //
// var boolean = [true , false , true , false];

// QUESTION 6 //
// var mixedArr = ["A" , 1 , true];

// QUESTION 7 //
// var qualifications = ["SSC" , "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.Phil" , "PhD"];
// document.writeln("<h1>Qualifications</h1>");
// for(var i = 0; i < qualifications.length; i++){
//     document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
// };

// QUESTION 8 //
// var names = ["Michael" , "John" , "Tony"];
// var scores = [320 , 230 , 480];
// var totalMarks = 500;
// for(let i = 0; i < 3; i++){
//     let percentage = (scores[i] / totalMarks)* 100;
//     document.writeln("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + percentage + "%" + "<br>");
// }

// QUESTION 9 //
/////part a/////
// let colors = ["red" , "blue" , "green"];
// document.writeln(colors +"<br>");
// let addInStart = prompt("Which color do you want to add in the beginning?");
// let ans1 = (addInStart);
//  colors.unshift(ans1);
// document.writeln(colors);
// // /////part b/////
// let addInEnd = prompt("Which color do you want to add in the end?");
// let ans2 = (addInEnd);
// colors.push(ans2);
// document.writeln(colors +"<br>");
// // part c /////////
// colors.unshift("white", "purple");
// document.writeln(colors +"<br>");

// // part d //////
// colors.shift(0);
// colors.shift(1);
// document.writeln(colors +"<br>");
// part e//////////////
// colors.pop();
// document.writeln(colors +"<br><br>");

/////part F/////
// var indexAdd = parseInt(prompt("At which index do you want to add a color(s)?"));
// var newColor = prompt("Which color do you want to add?");
// colors.splice(indexAdd , 0 , newColor);
// document.writeln(colors +"<br><br>");

/////part G/////
// var indexRemove = parseInt(prompt("At which index do you want to remove a color?"));
// var quantity = parseInt(prompt("How many colors do you want to delete?"));
// colors.splice(indexRemove , quantity);


// QUESTION 10 //
// var scores = [20 , 53 , 22 , 15 , 34];
// document.writeln("<h2>Scores of students: </h2>" + scores);
// scores.sort((a, b) => a - b);
// document.writeln("<h2>Ordered scores of students: </h2>" + scores);

// QUESTION 11 //
// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.writeln("<h1>Cities List: </h1>" + cities);
// var selectedCities = cities.slice(1,3);
// document.writeln("<h1>Selected Cities: </h1>" + selectedCities);

// QUESTION 12 //
// var arr = ["This", " is", " my", " cat"];
// var result = arr.join("");
// document.write("<h1>Array:</h1> " + arr + "<br><br>");
// document.write("<h1>String:</h1> " + result);

// QUESTION 13 //
// var arr = [];
// arr.push("Apple");
// document.writeln(arr + "<br>");
// arr.push("Banana");
// document.writeln(arr  + "<br>");
// arr.push("Mango");
// document.writeln(arr  + "<br>");

// QUESTION 14 //
// let arr = [];
// arr.push("Red");
// arr.push("Blue");
// arr.push("Green");
// document.writeln(arr + "<br>");
// document.writeln(arr.pop() + "<br>");
// document.writeln(arr.pop() + "<br>");
// document.writeln(arr.pop() + "<br>");

// QUESTION 15 //
// let manufacturers = ["Apple" , "Samsung" , "Motorola" , "Sony" , "Nokia" , "Haier"];
//  document.writeln("<select>");
// for (var i = 0; i < manufacturers.length; i++) {
// document.writeln("<option>" + manufacturers[i] + "</option>");
// }
// document.writeln("</select>");

// ///////////////chap 17-20//////////////////
// Question 1/////////
// let multiArray = [[], [], []];

// Question 2 ////////////////
// let multiArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

// Question 3 ////////////////
// for(let i = 1;i<=10;i++){
//     document.writeln(i)
// }

// Question 4 ////////////////
// let table = +prompt("Enter a Num to show its Multiplication Table?");
// let ansNum = (table);
// let length=(+prompt("Enter the length of table?"));
// let anslen = (length);
// for( let i = 1; i<=anslen;i++){
//     document.writeln(ansNum + "x" + i + "=" + (ansNum  * i) + "<br>");
// }

// Question 5 ////////////////
// let fruits =["apple", "banana", "chikoo", "grapes"];
// for(let i = 0;i < fruits.length;i++){
//     console.log(fruits[i]);
    
// };

// Question 6 ////////////////
// // Counting
// document.writeln("<h3>Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//   document.writeln(i + ", ");
// }

// // Reverse counting
// document.writeln("<h3>Reverse Counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//   document.writeln(i + ", ");
// }

// // Even numbers
// document.writeln("<h3>Even:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//   document.writeln(i + ", ");
// }

// // Odd numbers
// document.writeln("<h3>Odd:</h3>");
// for (let i = 1; i <= 19; i += 2) {
//   document.writeln(i + ", ");
// }

// // Series with 'k'
// document.writeln("<h3>Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//   document.writeln(i + "k, ");
// }

// Question 7 //////////
// let userInput = prompt("Enter the item you want to search:");
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// if (A.includes(userInput)) {
//     alert(userInput + " is available in our bakery!");
// } else {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

// Question 8 //////////
// let A = [24, 53, 78, 91, 12];
// let largest = A[0]; // start with the first element

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; 
//   }
// }

// console.log("The largest number is: " + largest);


// Question 9 //////////

// let A = [24, 53, 78, 91, 12];
// let smallest = A[0]; // start with the first element

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i]; // update if a smaller number is found
//   }
// }

// console.log("The smallest number is: " + smallest);

// Question 10 //////////
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }




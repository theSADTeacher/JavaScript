"use strict";

/////////////////////////////////////////////
//         98-382.CertiLibrary.pdf         //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #1
// CertiLibrary #1.
/* Analyze the multiply() function calls.   */
var val1 = 25;
var val2 = 4;
function multiply() {
  return val1 * val2;
}

console.log("Global multiply() returns: " + multiply());
multiply();

function getProduct() {
  var val1 = 2;
  var val2 = 3;

  function multiply() {
    return val1 * val2;
  }
  console.log("Local multiply() returns: " + multiply());
  return multiply();
}

// Answer:
// The call to Global multiply function returns 100.  True
// The call to Local multiply function returns 100.   False

// getProduct();

///////////////////////////////////////////// Unique Problem #2
// CertiLibrary #2.
/* You are creating a JavaScript function that returns a date the specied 
number of months in the future of the current date.
The function must meet the following requirements:
-> Accept a number that represents the number of months to add or subtract 
from the current date.
-> Return the current data adjusted by the number of months passed into the 
function.
How should you complete the code? */

function adjustMonth(value) {
  var date = new Date();
  var month = date.getMonth();
  date.setMonth(month + value);
  return date;
}
// console.log("Adjust month by 2: " + adjustMonth(2));
// console.log("Adjust month by -2: " + adjustMonth(-2));

///////////////////////////////////////////// Unique Problem #3
// CertiLibrary #3.
/* You work as a JavaScript developer for Adventure Works. 
You are writing a simple script that performs the following actions:
-> Declares and initializes an array
-> Fills the array with 10 random integers
-> Adds every other number starting with the rst element
// How should you complete the code? */
var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push(Math.round(Math.abs(Math.random() * 10)));
}

var sum = 0;
for (var j = 0; j < 10; j = j + 2) {
  sum += numbers[j];
}
console.log(
  "The list: " + numbers + " and the sum of every other element is:  " + sum
);

///////////////////////////////////////////// Unique Problem #4
// CertiLibrary #3.
/* You are writing a JavaScript program for Blue Yonder Airlines. 
The program stores various information about the airline"™s
ights.
The program has initialized the following variables: 
You need to determine the data type of the code segment based on 
initialization and the assignment of the variables. 
*/

var flightDestination = "Denver";
var flight = 5;
var roundTrip = 2449.58;
var onTime = true;
var id = flight + flightDestination;

// console.log("flightDestination is a " + typeof flightDestination);  //string
// console.log("flight is a " + typeof flight);  // number
// console.log("roundTrip is a " + typeof roundTrip);  //number
// console.log("onTime is a " + typeof onTime);  //boolean
// console.log("id is a " + typeof id);  //string

///////////////////////////////////////////// Unique Problem #5
// CertiLibrary #4.
/* You are planning to use the Math object in a JavaScript application. 
You write the following code to evaluate various Math functions:
What are the final values for the three variables? */

var ceil = Math.ceil(100.5);
var floor = Math.floor(100.5);
var round = Math.round(100.5);

// console.log("ceil(100.5) rounds to " + ceil);  // 101
// console.log("floor(100.5) rounds to " + floor); //100
// console.log("round(100.5) rounds to " + round); // 101

///////////////////////////////////////////// Unique Problem #6
// CertiLibrary #5.
/* You are creating JavaScript code that manipulates dates. You want to 
initialize a Date object with the date January 1, 2017 by using
the year, month, and date parameters.
How should you complete the code?  */

var date = new Date(2017, 0, 1);

// console.log(date);

///////////////////////////////////////////// Unique Problem #7
// CertiLibrary #6.
/* Your instructor has asked you to write a program that uses simple rules
 to help determine if a person should take the train, drive
their car, or ride a bike, depending on the conditions of the weather and 
the amount of gas in the car's tank.
The program has the following requirements:
-> When the temperature is above 65 degrees and it is not raining, the person 
should be told to ride their bike.
-> When it is raining, the person should be told to drive their car.
-> If their car has half a tank of gas or less, they should be told to take the 
train.
How should you complete the code?  */

var temperature = 65;
var raining = true;
var fuelTank = 0.5;
let advice;

if (temperature > 65 && !raining) advice = "Ride Bike";
else if (fuelTank <= 0.5) advice = "Take Train";
else advice = "Drive your car";

// console.log(
//   "If the temp is 65, it is raining, and you have half a tank of gas, you should " +
//     advice
// );

///////////////////////////////////////////// Unique Problem #8
// CertiLibrary #8.
/* You are using JavaScript to create a function that calculates admission price.
The function must meet the following requirements:
-> The function accepts the age of the customer as a parameter
-> A customer who is less than 5 years old gets in free
-> A customer who is 65 years old or older gets in free
-> A customer who is 5 years old to 17 years old, pays $10 USD
-> All other customers pay $20 USD
How should you complete the code?  */

function ticketPrice(age) {
  var price = 20;
  if (age < 5 || age >= 65) {
    price = 0;
  }
  if (age >= 5 && age < 18) {
    price = 10;
  }
  return price;
}

// console.log("If the customer is 5, the ticket price is $" + ticketPrice(5));

///////////////////////////////////////////// Unique Problem #9
// CertiLibrary #9.
/* The ABC company offers a mid-week discount of 10% on Wednesdays.
You need to write a JavaScript function that meets the following requirements:
-> Accepts the day of the week as a string
-> Returns the appropriate discount
You create the following code.
You must complete the code at lines 03, 04, and 07.
How should you complete the code?  */

function getDiscount(day) {
  var discount = 0;
  switch (day) {
    case "Wednesday":
      discount = 0.1;
      break;
    default:
      discount = 0;
  }
  return discount;
}

// console.log(
//   "If the day is Wednesday, the discount is " + getDiscount("Wednesday")
// );

///////////////////////////////////////////// Unique Problem #10
// CertiLibrary #10.
/* You need to write a loop that will traverse the length of an array to find 
the value orange. If an array element value is null, the code
should immediately go to the next element. When the value is found, the loop 
should exit.
How should you complete the code?  */
function doWork() {
  var list = [
    "apple",
    "pear",
    null,
    "apple",
    "banana",
    "orange",
    null,
    "grape",
    "kiwi",
  ];
  for (var i = 0; i < list.length; i++) {
    if (list[i] === null) {
      continue;
    }
    if (list[i] === "orange") {
      alert("found");
      break;
    }
  }
}

// doWork();

///////////////////////////////////////////// Unique Problem #11
// CertiLibrary #11.
/* Your instructor has asked you to implement code that would display a 
two-dimensional array of any size inside a <div> tag.
You write the following code. You need to complete the code.
Which three segments should you use to develop the solution? 

<< Part of the code for this problem is in the html file. >>
 */
var div = document.getElementById("board");
var board = [
  ["-", "X", "-", "X"],
  ["-", "O", "X", "O"],
  ["X", "O", "-", "O"],
];

for (var i = 0; i < board.length; i++) {
  for (var j = 0; j < board[0].length; j++) {
    div.innerHTML = div.innerHTML + board[i][j] + " ";
  }
  div.innerHTML = div.innerHTML + "<br>";
}

///////////////////////////////////////////// Unique Problem #12
// CertiLibrary #12.
/* You are using JavaScript to write a safe root math utility that
 has the following requirements:
-> Given the function safeRoot(a, b):
-> If the radicand (a) is non-negative, return Math.pow (a, 1/b);
-> Otherwise,If the index (b) is divisible by 2, then return text indicating 
the result is imaginary.
-> Otherwise return -Math.pow (-a, 1/b)
How should you complete the code?  */
function safeRoot(a, b) {
  if (a >= 0) {
    return Math.pow(a, 1 / b);
  } else if (b % 2 == 0) {
    return "Result is an imaginary number";
  } else {
    return -Math.pow(-a, 1 / b);
  }
}
// console.log("The root of the number is : " + safeRoot(-8, 3));

///////////////////////////////////////////// Unique Problem #13
// CertiLibrary #13.
/* You are creating a function named countdown. The function accepts a single
 parameter, start, and displays a countdown from that
number down to zero in increments of one.
How should you complete the code?  */
function countdown(start) {
  for (var i = start; i >= 0; --i) {
    console.log(i);
  }
}

// countdown(5);

///////////////////////////////////////////// Unique Problem #14
// CertiLibrary #14.
/* You are creating a calendar application. You need to ensure that 
the code works correctly for all months of the year.
How should you complete the code?  */
var daysInMonth;
var month;
month = new Date().getMonth();
console.log(month);
switch (month) {
  case 1:
    daysInMonth = 28; // for February, ignore Leap Years
    break;
  case 3:
  case 5:
  case 8:
  case 10:
    daysInMonth = 30;
    break;
}

console.log("month : " + month);
console.log("daysInMonth : " + daysInMonth);

///////////////////////////////////////////// Unique Problem #15
// CertiLibrary #15.
/* You are creating a function that does safe division.
The function has the following requirements:
-> The function receives two parameters for the numerator and denominator.
-> If the denominator is zero, the function must return false.
-> If the denominator is not zero, the function must return true.
You write the following code. */
function isSafeDivide(numerator, denominator) {
  if ((denominator = 0)) {
    return false;
  } else {
    return true;
  }
}
// ANSWERS
// The function will always return false:  NO
// The operator in the if conditional should be != :  NO

// console.log("Is the number safe to divide? " + isSafeDivide(6, 0));

/////////////  EOF ////////////////////////////////

/////////////////////////////////////////////
//         98-382 by CertKillers.pdf       //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #16
// CertKillers #1.
/* You are designing a web page that contains a blue button. 
-> When the buttonis pressed, it should call a function that displays the message ‘Welcome!’. 
-> When the cursor hovers over the button, the button should turn red. 
-> When the cursor leaves the button, the button should revert back to its original color of blue.
You want to complete the markup using the appropriate HTML events.
How should you complete the markup?  

<< solution is in the HTML file >>

*/
function showRed() {
  var changer = document.getElementById("changer");
  changer.style.backgroundColor = "red";
}
function showBlue() {
  var changer = document.getElementById("changer");
  changer.style.backgroundColor = "blue";
}
function notify() {
  alert("Welcome!");
}

///////////////////////////////////////////// Unique Problem #17
// CertKillers #2.
/*  You are creating a web page with a script.
-> The script will insert the window’s location inside the page’s input element.
How should you complete the code? 

<< Part of the code is in the html file. >>

*/
document.getElementById("url").value = window.location.href;

///////////////////////////////////////////// Unique Problem #18
// CertKillers #3.
/* You are designing a web page with a script that must dynamically change the content
 of a paragraph element to display the value returned by the function randomQuote().
You have created the following code.
Which code segment should you use at line 08?

<< Part of the code is in the html file. >>

 */
function changeText() {
  // document.getElementById("tester").value = randomQuote();
  // document.getElementById("tester").title = randomQuote();
  document.getElementById("tester").innerHTML = randomQuote();
  // document.getElementById("tester").script = randomQuote();
}
function randomQuote() {
  return "This is a random quote.";
}

///////////////////////////////////////////// Unique Problem #19
// CertKillers #4.
/* You are designing a web page that contains a list of animals. The web page includes a script that
outputs animals from a list.
You create the following HTML to test the script:
You need to create a function that will display the list of animals, including any formatting, 
in the div element.
How should you complete the code? 


<< Part of the code is in the html file. >>
*/
function showlist() {
  var list = document.getElementsByTagName("li");
  console.log(list);
  for (var i = 0; i < list.length; i++) {
    console.log(i);
    document.getElementById("list").innerHTML += list[i].innerText;
  }
}

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//      98-382 Sample Questions. doc       //
/////////////////////////////////////////////

/////////////////////////////////////////////  <<< Broken Problem >>>
// Sample Questions #1 same as Sergi #1 below */

///////////////////////////////////////////// Unique Problem #20
// Sample Questions #2.
/* This question requires that you evaluate the underlined text to determine if
it is correct. You review the following JavaScript code: */
var x = 15;
x %= 5;

/*When this code executes, <u>the value of x is 0. </u>

Review the underlined text.
 
If it makes the statement correct, select “No change is needed”. 
If the statement is incorrect, select the answer choice that makes the 
statement correct.

ANSWERS
->  a) No change is needed
b) the value of x is 3
c) the value of x is 5
d) the value of x is undefined */

// console.log("The value of x is " + x);

/////////////////////////////////////////////  Unique Problem #21
// Sample Questions #3.
//<<< Defective Code - this problem was probably corrected or depricated >>>
/* You are writing a JavaScript program for Contoso Suites that will output
HTML. You need to output each room type on a new line using the correct
method. You create the following code for the function.
You need to insert the correct code at Line 9. Which line should you use?

<< Part of the code is in the html file. >>
*/

var line = document.getElementById("para");
// console.log("starting line: " + line.innerHTML);
var rooms = ["Single", "Double", "Triple", "Suite"];
var i = 0;
for (i = 0; i < rooms.length; i++) {
  //document.getElementById("body").innerHTML = rooms[i] + line.innerHTML;
  document.getElementById("para").innerHTML += rooms[i] + line.innerHTML;
  // document.getElementById("para").innerHTML += i + rooms + line.innerHTML;
  //document.getElementById("body").innerHTML += rooms + i;

  // console.log("in the loop line " + [i] + line.innerHTML);
}

///////////////////////////////////////////// Unique Problem #22
// Sample Questions #4.
/* You are creating a dynamic HTML page by using JavaScript. Your page has
an image of the sun. When the user’s mouse pointer moves across the image of
the sun, the image should change to the image of the moon.
When the user’s mouse pointer is no longer over the image should change back
to the image of the sun. You need to write the code for the image swap.
Which two events must you program for?
(Choose two.)
a) onmouseup
--> b) onmouseout
c) onmosedown
--> d) onmouseover
e) onmouseenter
*/

/////////////////////////////////////////////
// Sample Questions #5 same as CertKillers #3.

/////////////////////////////////////////////
// Sample Questions #6 is the same as monu #5 below.

///////////////////////////////////////////// Unique Problem #23
// Sample Questions #7.
/* You are using the pushState() function in the history object as follows:

history.pushState(stateObject, "My Page", "test.html");

The stateObject is 1 MB in size. You need to retain information needed by the
user as long as the window is open. What should you do?

a) Throw an InternalError.
b) Use the pushState() function as is.
c) Use localStorage instead.
d) Use sessionStorage instead */

/*Understanding this Prolem:
pushState() allows you to add entries to the browser’s history without changing 
the page

stateObject represents the state of the app at this point in the history. 

"My Page" is a title for the state in the stateObject. 

"test.html" is supposed to be the new URL associated with this state, but it does 
not actually navigate to this URL. It just changes what appears in the address bar.

Clues: 
We need the state information in stateObject to be available as long as the window is open.
   a) Raise an error:  doesn't apply to this requirement
   --> b) pushState(): retains information for the duration of the page session and is cleared 
   when the tab or window is closed.
   --> c)	sessionStorage stores data for the duration of the page session and is automatically 
   cleared when the tab or window is closed.
   d)	localStorage persists data even after the browser is closed and reopened
	
the stateObject is 1MB
   a) Raise an error: 1MB is manageable but greater than 5MB would not be
   b) pushState() : isn’t designed for storing large amounts of data. 
   --> c and d)localStorage and sessionStorage are both part of the Web Storage API and
   are designed to store up to 5 MB of data on the client’s browser.
    
   
the overlap of the two requirements is d) sessonStorage

*/

///////////////////////////////////////////// Unique Problem #24
// Sample Questions #8.
/* You are developing an application that relies on cookies. You need to design
the page so that when a user opens the page and cookies are enabled, a cookie
is submitted to indicate the last time the user visited the site.
The page needs to check for cookies. Which event should you use?
--> a) onload
b) onchange
c) onselect
d) onclick */

/* Notes: onchange, onselect, and onclick all require user interaction and would not 
occur automatically */

///////////////////////////////////////////// Unique Problem #25
// Sample Questions #9.
/* You are creating a JavaScript program for an accounting system. You create
the following code. Line numbers are included for reference only.*/

var firstName = "Jo";
var lastName = "Berry";
//var while = Date.now();
var color = "Red";
//var break = 'No';
/*
You evaluate the code to ensure that it follows JavaScript best practices. Which
line should you change?  
a) 01
b) 02
--> c) 03
d) 04
--> e) 05 */
// Note: There are two reserved keywords attempting to be used as variable names

///////////////////////////////////////////// Unique Problem #26
// Sample Questions #10.
/*10. You have the following form:

<form action="http://localhost:35132/Account/FormTest" method="get">
    <input type="text" name="first" value="">
    <input type="text" name="last" value="">
    <button type="submit">Submit</button>
</form>

A user fills out the form with 'John' in the first name and 'Doe' in the last name.
Which URL will the form submit?
a) http://localhost:35132/Account/FormTest?firstName=John&lastName=Doe
b) http://localhost:35132/Account/FormTest
c) http://localhost:35132/Account/FormTest#first=John?last=Doe
-->  d) http://localhost:35132/Account/FormTest?first=John&last=Doe
  */

/////////////////////////////////////////////
// Sample Questions FREETEST - QUESTION 1/5 same as Sample Questions #4 above

////////////////////////////////////////////
// Sample Questions FREETEST - QUESTION 2/5 same as CertKillers #2 above.

////////////////////////////////////////////
// Sample Questions FREETEST - QUESTION 3/5 same as CertKillers #4 above.

////////////////////////////////////////////
// Sample Questions FREETEST - QUESTION 4/5 same as CertKillers #3 above.

////////////////////////////////////////////
// Sample Questions FREETEST - QUESTION 5/5 same as CertKillers #1 above.

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//    98-382_2023-02-20_by_Sergi_31.pdf    //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #27
// Sergi #1.
/* You are writing an engineering application. You need to create a 
function that will round numbers to 3 or more decimal places.
You need to create a function that receives the following two parameters:
The value parameter is the number to be formatted
The digits parameter is the number of digits to display
The function must return the value with the number of digits specified.
Which function should you use */

function significance(value, digits) {
  return value.toPrecision(digits);
} //this meets all conditions only for special cases

// function significance(value, digits) {
//   return value.toString(digits);
// }

function significance(value, digits) {
  return value.toFixed(digits);
} // this one meets the condition of 3 or more digits after the decimal

// function significance(value, digits) {
//   return value.valueOf(digits);
// }

console.log(
  "Rounded to 3 or more decimal places (digits = 4): " +
    significance(951413.141592653589793, 4)
);

/////////////////////////////////////////////
// Sergi #2 same as CertiLibrary #15 above

/////////////////////////////////////////////
// Sergi #3 same as CertiLibrary #12 above

///////////////////////////////////////////// Unique Problem #28
// Sergi #4
/* For each of the following segments, select Yes if the statement is true. Otherwise, select No.

When using a GET request with a form, the data length is restricted.  --> YES
Only GET requests should be used when handling sensitive form data. --> NO
Form POST requests are cached.  --> NO
POST requests will always remain in browser history. --> NO
*/

/////////////////////////////////////////////
// Sergi #5 same as CertKillers #3 above.

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//  98-382_2023-02-26_by_RAJNISHJ_36.pdf   //
/////////////////////////////////////////////

/////////////////////////////////////////////
// RAJNISH #1 same as CertiLibrary #13 above

///////////////////////////////////////////// Unique Problem #29
// RAJNISH #2
/* You are evaluating a colleague's code to ensure it meets best practices.
For each of the following statements, select Yes if the statement is true.
Otherwise, select No.  

The characters // are used to mark a single line as a comment. --> YES
totalscore is in the correct format according to standard naming conventions for JavaScript.  --> NO
~score can be used as a variable name. --> NO
switch can be used as a variable name. --> NO

*/

/////////////////////////////////////////////
// RAJNISH #3 same as CertKillers #2 above.

///////////////////////////////////////////// Unique Problem #30
// RAJNISH #4
/* Evaluate th following code. */
let n = 50; // n = 50
let c = n + 5; // c = 55
let a = n % 2; // a = 0
let d = c / 11; //  d = 5
n = d % 2; // n = 1
console.log(n, c, a, d); //1 55 0 5
/* What is the value of each variable sent to the console?  */

///////////////////////////////////////////// Unique Problem #31
// RAJNISH #5
/* You are creating a web page that allows customers to choose how hot their 
spice is. If they choose spicy, a warning should be displayed. 
You create the following form.   

<< part of the code for this problem is on the html file >>

You create the following JavaScript code to display the warning.
*/
function checkWarning() {
  var option = document.forms.orderForm["heatIndex"].value;
  if (option == "Spicy") {
    alert("Spicy food! Good Luck!");
  }
}
/* When you choose spicy and click Order, the wanning fails to display.
You need to solve this problem.
What should you do?*/
// Change the html from <button onclick="checkWarning()">Order</button> to <button onchange="checkWarning()">Order</button>
// Change the html from <button onclick="checkWarning()">Order</button> to <button onclick="checkWarning">Order</button>
// Change the script from  var option = document.forms.orderForm["heatIndex"]; to  var option.value = document.forms.orderForm["heatIndex"];
// --> Change  var option = document.forms.orderForm["heatIndex"]; to  var option = document.forms.orderForm["heatIndex"].value;

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//  98-382_2023-02-27_by_gaylord_36.pdf   //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #32
// gaylord #1
/* Variable x has a value of 5. Variable y has a value of 7.
For each of the following expressions, select True if the statement evaluates to true. Otherwise, select False.
N */
x = 5;
let y = 7;
x > 7 && y > 6;
x == 6 || y == 6;
!(x == y);

// console.log(x < 7 && y > 6); //true
// console.log(x == 6 || y == 6); //false
// console.log(x !== 7); //true
// console.log(!(x == y)); //true

/////////////////////////////////////////////
// gaylord #2 is the same as CertiLibrary #15.

///////////////////////////////////////////// Unique Problem #33
// gaylord #3
/* You are designing a function that allows you to perform unit tests on 
other functions in a library. You will invoke each library function by 
using the eval JavaScript function. If an exception occurs when invoking  
a function, you want to display a message box with the following message:
The function does not exist.
How should you complete the code? 
 */
function unitTest(expression) {
  try {
    eval(expression);
  } catch (err) {
    alert("That function does not exist.");
  }
}

/////////////////////////////////////////////
// gaylord #4 is the same as  CertiLibrary #8.

///////////////////////////////////////////// Unique Problem #34
// gaylord #5
/* For each of the following statements, select Yes if the statement 
is true. Otherwise, select No. 
 
External JavaScript files can be cached. --> YES
Internal JavaScript can be placed between the <head> tags.   --> YES
Placing your scripts at th bottom of the page lets the browser load
  the other elements of the page first.  --> YES
Internal ...
*/

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
// 98-382_2023-02-28_by_Yaser_Atia_33.pdf  //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #35
// Yaser_Atia #1
/* A javascript array is initalized as follows: */
var array = [20, 40, 60, 80];
/* You write the following code to manipulate the array :*/
array.shift();
// console.log(array); // removes the first element [40, 60, 80]
array.pop();
// console.log(array); //  remove th last element [40, 60]
array.push(10);
// console.log(array); // adds to the end [40, 60, 10]
array.unshift(100);
/* You need to determine the contents of the array.
Which four elements does the array contain in the sequence*/
// console.log(array); // adds to the front [100, 40, 60, 10]

/////////////////////////////////////////////
// Yaser_Atia #2 same as gaylord #1

/////////////////////////////////////////////
// Yaser_Atia #3 same as gaylord #5

///////////////////////////////////////////// Unique Problem #36
// Yaser_Atia #4
/* Evaluate the code:  */
function change(student, course) {
  student = "JavaScript Student";
  course.name = "JavaScript";
  course.grade = 100;
}
var sampleCourse = { name: "HTML", grade: 90 };
var sampleStudent = "HTML Student";
change(sampleStudent, sampleCourse);

// console.log(sampleStudent, sampleCourse.name, sampleCourse.grade);

/* You need to determine the values of sampleStudent, sampleCourse.name, 
and sampleCourse.grade that are output by the console.log()
What are the final values for these three variables? */

/* ANSWER:
HTML Student JavaScript 100
 */

/* Notes on this problem:
student is a primitive type and cannot be mutated by the function.
coure is an object type.  we know this because of the use 
of dot property in the function.  object types can be mutated
by the function.
name retains the value passed to the function
course namea and course grade values are changed
by the function  */

/////////////////////////////////////////////
// Yaser_Atia #5 same as one of the CertiLibrary #3 above.

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//    98-382_2023-03-04_by_monu_35.pdf     //
/////////////////////////////////////////////

/////////////////////////////////////////////
// monu #1 is the same as CertiLibrary #15 above.

/////////////////////////////////////////////
// monu #2 is the same as  gaylord #3 above.

/////////////////////////////////////////////
// monu #3  is the same as  one of the CertiLibrary #3 above.

/////////////////////////////////////////////
// monu #4 is the same as Sergi #1 above.

///////////////////////////////////////////// Unique Problem #37
// monu #5
/*  You are writing a function that calculates the remainder for 
integer division. The function receives two parameters, a and b, 
and must return the remainder that is left over when the
 integer a is divided by the integer b. You create the following
code.mYou want to complete the function for lines 02 and 03.
Which two sets of code segments should you use */

function remainder(a, b) {
  // a = a/ b - a;
  // return a;

  // b = b % a ;
  // return b;

  // b %= a;
  // return b;

  a %= b;
  return a;

  // a = a % b;
  // return a

  // b = b / a -b
  // return b
}

// console.log(remainder(15, 2));

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//    98-382_2023-03-07_by_edanic_36.pdf   //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #38
// edanic #1
/* You need to evaluate the following code segment. */
n;
console.log("n :" + typeof n);
a = "3.4";
console.log("a :" + typeof a);
var textArray = ["Welcome back", "Incorrect answer", "Enter a name"];
console.log("textArray : " + typeof textArray);
c = 2.4;
console.log("c : " + typeof c);
var tag = null;
console.log("tag: " + typeof tag);

/*  what do each of the console log functions write to the console?
n : undefined
a : string
textArray : object
c : number 
tag : object
*/

/////////////////////////////////////////////
// edanic #2 same as CertiLibrary #2 above.

/////////////////////////////////////////////
// edanic #3 same as  CertiLibrary #9 above.

/////////////////////////////////////////////
// edanic #4 same as CertiLibrary #8 above

/////////////////////////////////////////////
// edanic #5 same as CertiLibrary #12 above.

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//    98-382-by-KillExams.pdf   //
/////////////////////////////////////////////

///////////////////////////////////////////// Unique Problem #39
// KillExams #1 (question 16)
/* You are using JavaScript to create a calculator.

<< Part of the code for this problem is in the html file. >>

You must create a function named add() that adds the 
values in the a and b inputelements and displays the 
result in the result input element. You define the following
function in JavaScript. 
You need to complete the body of the function.
Which three code segments should you use to develop the solution? 
*/

function add() {
  var a = eval(document.getElementById("a").value);
  var b = eval(document.getElementById("b").value);
  document.getElementById("result").value = a + b;
}

/////////////////////////////////////////////
// KillExams #2 (question 17) is the same as Yaser_Atia #1 above

/////////////////////////////////////////////
// KillExams #3 (question 18) is the same as Sample Questions #4 above.

/////////////////////////////////////////////
// KillExams #4 (question 19) is the same as  CertiLibrary #8 above.

//////////////  EOF  ///////////////////////

/////////////////////////////////////////////
//    98-382.v2018-05-08.by.Chloe.22q.pdf   //
/////////////////////////////////////////////

//////////////////////////////////////////// Unique Problem #40
// Chloe #1
/* You are creating a web page that tests a user’s ability to accurately 
type text. The validation should be case-insensitive.
How should you complete the code? 


<< Part of the code for this problem is in the html file. >>
*/
function validate() {
  var input = document.getElementById("tester2").value;
  var text = document.getElementById("userText").innerHTML;
  if (input.toLowerCase() == text.toLowerCase()) {
    alert("Success");
  }
}

////////////////////////////////////////////
// Chloe #2 is the same as Yaser_Atia #4 above.

////////////////////////////////////////////
// Chloe #3 is the same as Yaser_Atia #1 above.

////////////////////////////////////////////
// Chloe #4 is the same as edanic #1 above.

////////////////////////////////////////////
// Chloe #5 is the same as Sergi #1 above.

////////////////////////////////////////////
// Chloe #6 is the same as CertiLibrary #1 above.

/////////////////////////////////////////////
// Chloe #7 is the same as CertiLibrary #2 above.

/////////////////////////////////////////////
// Chloe #8 is the same as  one of the CertiLibrary #3 above.

/////////////////////////////////////////////
// Chloe #9 is the same as  one of the CertiLibrary #3 above.

/////////////////////////////////////////////
// Chloe #10 is the same as CertiLibrary #4 above.

/////////////////////////////////////////////
// Chloe #11 is the same as  CertiLibrary #5 above.

/////////////////////////////////////////////
// Chloe #12 is the same as CertiLibrary #6 above.

/////////////////////////////////////////////
// Chloe #13 is the same as CertiLibrary #8 above.

/////////////////////////////////////////////
// Chloe #14 is the same as CertiLibrary #9 above.

/////////////////////////////////////////////
// Chloe #15 is the same as CertiLibrary #10 above.

/////////////////////////////////////////////
// Chloe #16 is the same as CertiLibrary #13 above.

/////////////////////////////////////////////
// Chloe #17 is the same as CertiLibrary #14 above.

/////////////////////////////////////////////
// Chloe #18 is the same as CertiLibrary #15 above.

/////////////////////////////////////////////
// Chloe #19 is the same as gaylord #1 above.

/////////////////////////////////////////////
// Chloe #20 << Broken Problem >>

/////////////////////////////////////////////
// Chloe #21 is the same as gaylord #3 above.

/////////////////////////////////////////////
// Chloe #22 is the same as  Sample Questions #2 above.

//////////////  EOF  ///////////////////////
//
//
//
//
///////////////////////////// IGNORE BELOW  /////////////////////////////////////////
// learning about bubbing
// Capturing phase
// document.getElementById("myDiv").addEventListener(
//   "click",
//   function () {
//     console.log("myDiv clicked during capture");
//   },
//   true
// ); // `true` denotes capturing phase

// // Bubbling phase
// document.getElementById("myDiv").addEventListener(
//   "click",
//   function () {
//     console.log("myDiv clicked during bubble");
//   },
//   false
// ); // `false` or omitting this argument denotes bubbling phase

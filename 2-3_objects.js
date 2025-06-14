"use strict";
/* 2.3 Complete and debug code that uses objects 
• Properties, methods, instantiation, Date object, retrieving date and time  
parts, localizing date format (MM/DD vs DD/MM), adding and subtracting  
dates
 */

/*
    Objects are dictionaries.
    In JS, everything is an object.
/*
    Properties:  an object's variables or parameters
    Methods:  an object's functions
*/

// construtor via simple object literal
// - simple
// - suitable for single,standalone objects that don't need to be repeated
// - quick to write, understand
// - use when you need a simple structure to store data
// - use when you do not need multiple instances or extensive functionality

let person = {
    firstName: 'Pallas',
    lastName: 'Kennedy',
    age: 54, 
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greet: function() {
        console.log('Hello, ' + this.fullName());
    }
};

console.log(person.fullName());  //method calling properties
console.log(person);
person.greet();

//  constructor via function
// - reusable
// - create multiple instances of the same object model
// - functions are shared among all instances
// - Allows on type of object to inherit the properties of another
// - useful when multiple objects with the same structure are needed
// - enables creation of complex object-oriented structures

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
  };
  
  let person1 = new Person("Hunter Brown", 26);
  let person2 = new Person("Jon Howell", 50);
  
  person1.greet(); // Outputs: Hello, John Doe
  person2.greet(); // Outputs: Hello, Jane Doe

// date object
let now = new Date();
console.log(now);

// date Getter Methods
console.log('getDate -> day of month:', now.getDate()); // Outputs day of the month
console.log('getDay -> day of week:', now.getDay()); // Outputs day of the month
console.log('getFullYear -> year: ', now.getFullYear()); // Outputs the year
console.log('getHours -> hour (0-23): ',now.getHours()); // Outputs hour (0 -23)
console.log('getMinutes (0-59): ', now.getMinutes()); // Outputs minutes
console.log('getSeconds -> seconds (0-59): ',now.getSeconds()); // Outputs seconds
console.log('getMilliseconds -> milliseconds (0-999) : ', now.getMilliseconds());
console.log('getMonth -> month',now.getMonth()); // Outputs month (0-indexed)
console.log('getTime', now.getTime()); // # of milliseconds since Jan 1, 1970 minus leap seconds
console.log('getTimezoneOffet -> time zone offset in min',now.getTimezoneOffset());
console.log("UTC Full Year:", now.getUTCFullYear()); // e.g., 2024
console.log("UTC Month:", now.getUTCMonth()); // 0-11 (January is 0)
console.log("UTC Date:", now.getUTCDate()); // 1-31
console.log("UTC Day:", now.getUTCDay()); // 0-6 (Sunday is 0)
console.log("UTC Hours:", now.getUTCHours()); // 0-23
console.log("UTC Minutes:", now.getUTCMinutes()); // 0-59
console.log("UTC Seconds:", now.getUTCSeconds()); // 0-59
console.log("UTC Milliseconds:", now.getUTCMilliseconds()); // 0-999

// date Setter Methods
now.setDate(13) 
console.log('setDate; input 0-31: ', now.setDate(13));
now.setFullYear(2050)
console.log('setFullYear; input 4 digit year: ', now.setFullYear(2050));
now.setHours(14);
console.log('setHours; input 0-23: ', now.setHours(14));
now.setMilliseconds(598);
console.log('setMilliseconds; input 0-999: ', now.setMilliseconds(598));
now.setMonth(4);
console.log('setMonth; input 0-11: ', now.setMonth(4));
now.setMinutes(32);
console.log('setMinutes; input 0-60: ', now.setMinutes(32));
now.setSeconds(58);
console.log('setSeconds; input 0-60: ', now.setSeconds(58));
now.setTime(152425927000);
console.log('setTime; input: milliseconds since Unix Epoch: ', now.setTime(152425927000));
// also the full suite of setUTC* methods

// date Conversion Methods
console.log('Readable date: ', now.toDateString());
console.log('ISO standard format: ', now.toISOString());
console.log('JSON format: ', now.toJSON());
console.log('Locale sensitive, date portion: ', now.toLocaleDateString());
console.log('US format:' , now.toLocaleDateString('en-US')); // Outputs MM/DD/YYYY
console.log('European format', now.toLocaleDateString('en-GB')); // Outputs MM/DD/YYYY

console.log('Locale sensitive, full: ', now.toLocaleString());
console.log('Locale sensitive, time portion: ', now.toLocaleTimeString());
console.log('Full object, all data', now.toString());
console.log('time portion', now.toTimeString());
console.log('convert to UTC timezone', now.toUTCString());

// Utility Methods
// .getValue() can attach to many different objects 
// where as .getTime() is specific to the date suite
console.log('primitive value == milliseconds since UE (number data type):', now.valueOf());

// construct a date object with another date-time than now
let otherDate = new Date(2020, 9, 31); //  year, month day
console.log(otherDate);
// Adding days
let addedDays = new Date(now.getTime());
console.log('addedDays', addedDays);
addedDays.setDate(now.getDate() + 10);
console.log('10 days from now is', addedDays);

// Subtracting days
let subtractedDays = new Date(now.getTime());
subtractedDays.setDate(now.getDate() - 10);
console.log('10 days ago was', subtractedDays); 



// Practice Set for MC 2.3: Objects and Date Handling in JavaScript

// Problem 1: Object Properties and Methods
// Create an object named student that represents a student with the 
// following properties:
// 	•	firstName
// 	•	lastName
// 	•	classYear (e.g., ‘Freshman’, ‘Sophomore’, etc.)
// 	•	major
// Add a method to this object named introduce that logs a greeting 
// to the console which includes their full name and major.

    // object literal constructor
let student = {   
    firstName :  "Pallas", 
    lastName : "Kennedy",
    classYear :  "Senior",
    major : "Physics",
    greet: function() {  
        console.log('Welcome,', this.firstName + " " + this.lastName +".  I see that you are a", this.classYear, "in", this.major +". Simply splendid!");
    },
};

student.greet();  

    // function constructor
function Student(first, last, classYear, maj) {  
    this.firstName = first; 
    this.lastName = last;
    this.classYear = classYear;
    this.major = maj;
}  
Student.prototype.greet = function() {
    console.log('Welcome,', this.firstName + " " + this.lastName +".  I see that you are a", this.classYear, "in", this.major +". Simply splendid!");
}   
let student1 = new Student("Jill", "Kennedy", "Senior", "Physics");  
student1.greet(); 
let student2 = new Student("Hunter", "Brown","Junior","Political Science");
student2.greet();


// Problem 2: Instantiation of Objects
// Define a constructor function for a Vehicle that includes properties 
// for make, model, and year. Add a method to this constructor’s 
// prototype that logs a string containing the make, model, and year 
// to the console.
// Create two instances of Vehicle.

    // object literal constructor
let vehichle = {
    make: "Jeep",
    model: "Wrangler",
    year: "2018",
    bestCarEver: function(){
        console.log('The', this.year, this.make, this.model, "is the best car ever!");
    },
}
vehichle.bestCarEver();

    // function constructor
function Vehichle(Make, Model, Year) {
    this.make = Make;
    this.model = Model;
    this.year = Year;
}
Vehichle.prototype.bestCarEver = function() {
console.log('The', this.year, this.make, this.model, "is the best car ever!");
}
let car1 = new Vehichle("Jeep","Wrangler","2018");
car1.bestCarEver();
let car2 = new Vehichle("Corvette","Stingray","2019");
car2.bestCarEver();


// Problem 3: Using Date Object
// Create a JavaScript Date object for your birthday. Using this 
// date object:
// 	•	Log the day of the week you were born.
// 	•	Log the current age you will be turning or have turned this year.

    //object literal constructor
const birthday = {
    dob: new Date(1970, 9, 31),
    today: new Date(),

    //part 1: Log the day of the week on which you were born
    dayOfBirth: function() {
        const dayOfTheWeekMap = {weekday : 'long'};
        const birthWeekDay = this.dob.toLocaleDateString('en-US', dayOfTheWeekMap)
        console.log('You were born on a', birthWeekDay);
    },

    //part 2: log the age you turned/will turn on your birthday in this calendar year
    howOldAreYou : function() {
        const yourAgeNow = this.today.getFullYear() - this.dob.getFullYear();
        const todayIsMyBirthday  = this.dob.getMonth() === this.today.getMonth() && this.dob.getDate() === this.today.getDate();
        const dateOfMyBirthdayThisYear = new Date(this.today.getFullYear(), this.dob.getMonth(), this.dob.getDate());
        const myBirthdayisYetToCome= this.today < dateOfMyBirthdayThisYear;
        if (todayIsMyBirthday) {
           console.log('Hey, Happy Birthday Today! You are turning', yourAgeNow, "today! Many happy returns!");
        } else if (myBirthdayisYetToCome) {
            console.log('You will be', yourAgeNow + 1, "on your next birthday.  Nice!" );
        } else {
            console.log('You turned', yourAgeNow, 'on your last birthday. Congrats!');
        }
    },
    birthdayStats: function() {
        this.dayOfBirth();
        this.howOldAreYou();
    }
}
birthday.birthdayStats();

    //function constructor
function Birthday(month, day, year){
    this.dob = new Date(year, month, day);
    this.today = new Date();
};

Birthday.prototype.dayOfBirth = function() {
    const dayOfTheWeekMap = {weekday : 'long'};
    const birthWeekDay = this.dob.toLocaleDateString('en-US', dayOfTheWeekMap)
    console.log('You were born on a', birthWeekDay);
}

Birthday.prototype.howOldAreYou = function() {
    const yourAgeNow = this.today.getFullYear() - this.dob.getFullYear();
    const todayIsMyBirthday  = this.dob.getMonth() === this.today.getMonth() && this.dob.getDate() === this.today.getDate();
    const dateOfMyBirthdayThisYear = new Date(this.today.getFullYear(), this.dob.getMonth(), this.dob.getDate());
    const myBirthdayisYetToCome= this.today < dateOfMyBirthdayThisYear;
    if (todayIsMyBirthday) {
       console.log('Hey, Happy Birthday Today! You are turning', yourAgeNow, "today! Many happy returns!");
    } else if (myBirthdayisYetToCome) {
        console.log('You will be', yourAgeNow + 1, "on your next birthday.  Nice!" );
    } else {
        console.log('You turned', yourAgeNow, 'on your last birthday. Congrats!');
    }
}
Birthday.prototype.birthdayStats = function() {
    this.dayOfBirth();
    this.howOldAreYou();
}

let JonHowell= new Birthday(7,8,1974);
let HunterBrown = new Birthday(5,7,1998);
JonHowell.birthdayStats();
HunterBrown.birthdayStats();


// Problem 4: Manipulating Date Objects
// Using the current date:
// 	•	Log the current date in the format “MM/DD/YYYY”.
// 	•	Add 100 days to the current date and log the new date.
// 	•	Subtract 20 years from the current date and display the year
//       you get.

    //object literal constructor
const changeCurrentDate = {
    today: new Date(),

    // Step 1: Return the current date in US format
    formatDate: function() {
        return this.today.toLocaleDateString('en-US');
    },

    // Step 2: Return a date 100 days from today
    add100Days: function() {
        let futureDate = new Date(this.today); // Create a new date object from today
        futureDate.setDate(this.today.getDate() + 100);
        return futureDate.toDateString();
    },

    // Step 3: Subtract 20 years from today
    sub20Years: function() {
        let pastDate = new Date(this.today.getFullYear() - 20, this.today.getMonth(), this.today.getDate());
        return pastDate.toDateString();
    },
}

let message = "Today is " +  changeCurrentDate.formatDate() + ". 100 days from today, it will be " + changeCurrentDate.add100Days() + ". And 20 years ago, the date was " + changeCurrentDate.sub20Years() + ".";
console.log(message);

// function constructors
function manipulateDates() {
    this.today = new Date();
}
manipulateDates.prototype.USStyleDate = function() {
    return this.today.toLocaleDateString('en-US');
}
manipulateDates.prototype.nDays = function (days){
    this.days = days;
    let futureDate = new Date(this.today); // Create a new date object from today
    futureDate.setDate(this.today.getDate() + days);
    return futureDate.toDateString();
}
manipulateDates.prototype.nYears = function (years){
    this.years = years;
    let pastDate = new Date(this.today.getFullYear() + this.years, this.today.getMonth(), this.today.getDate());
    return pastDate.toDateString();
}
let testThis = new manipulateDates
let userdays = prompt("Change the date by how many days? Use a negative number for days back");
let changebydays = parseInt(userdays);
let useryears = prompt("Change the date by how many years? Use a negative numer for years back");
let changebyyears = parseInt(useryears);
let message2 = "Today is " +  testThis.USStyleDate() + ". " + userdays + " days away from today, the date is " 
    + testThis.nDays(changebydays) + ". And " + useryears + " years away from now, the date is " + testThis.nYears(changebyyears) + ".";
console.log(message2);
// Problem 5: Localizing Date Format
// 	•	Create a Date object for the current date and time.
// 	•	Display this date in both the US format (en-US) and a European 
//      format (en-GB) using toLocaleDateString().

let prettyDate =  {
    today : new Date(),
    places: function () {
        console.log("Here is the standard US format",this.today.toLocaleDateString('en-US'));
        console.log('The English format looks funny to us:', this.today.toLocaleDateString('en-GB'));
        console.log('Germany does it fancy:',this.today.toLocaleDateString('de-DE'));
        console.log('The French way looks the same as England: ',this.today.toLocaleDateString('fr-FR'))
    }
}
prettyDate.places()

function better(month, day, year) {
    this.date = new Date(year, month - 1, day);
}
better.prototype.prettyDates = function() {
    console.log("Here is the standard US format",this.date.toLocaleDateString('en-US'));
    console.log('The English format looks funny to us:', this.date.toLocaleDateString('en-GB'));
    console.log('Germany does it fancy:',this.date.toLocaleDateString('de-DE'));
    console.log('The French way looks the same as England: ',this.date.toLocaleDateString('fr-FR'))
}

let userInput = prompt("Enter a date in MM-DD-YYYY format and I'll show you how the date is written in different parts of the world.");
let userDate = userInput ? userInput.split("-") : null;
// next step:  user input validation such as check that there are three elements in the array
// check that each element !isNaN()
// its also possible the user didn't use '-' to separate the date, handle that
let showMe = new better(parseInt(userDate[0]),parseInt(userDate[1]),parseInt(userDate[2]));
showMe.prettyDates()

// Problem 6: Create and Modify Object Dynamically
// Create an object named workshop with properties title and participants 
// (number of participants). Add a method that increases the number of 
// participants by a given amount.
// Test this method by increasing the number of participants by 5, then 
// log the updated number of participants.

let workshop = {
    title: "Learn to Use Objects in JavaScript",
    participants: 15,
    addMoreParicipants: function (addThisMany) {
        this.participants += addThisMany
    }
}
console.log('The workshop, ' + workshop.title + ", currently has " + workshop.participants + " participants");
console.log('We have room to add 5 folks from the waiting list. Please update and report.');
workshop.addMoreParicipants(5);
console.log('We now have ' + workshop.participants + " enrolled.");

function workShop(title, initialJoin) {
    this.title = title;
    this.participants = parseInt(initialJoin);
}
workShop.prototype.addMoreParticipants = function(addThisMany) {
    this.participants += parseInt(addThisMany);
}
let setTitle = prompt("What is the title of the workshop?")
let initialEnrollement = prompt("What is the initial enrollment for this workshop?")
let newWorkshop = new workShop(setTitle, initialEnrollement);
console.log('The workshop, ' + newWorkshop.title + ", currently has " + newWorkshop.participants + " participants.");

let waitList = prompt("We have room to add more. How many would you like to move from the waitlist?");

console.log('We have room to add '+ waitList + ' folks from the waiting list. Please update and report.');
newWorkshop.addMoreParticipants(waitList);
console.log('We now have ' + newWorkshop.participants + " enrolled.");

"use strict";
/* 1.5 Complete and debug code that interacts with the Browser Object  
Model (BOM) 

 */

/* The BOM allows JS to interact with the browser itself

Key BOM objects

1. window Object
   This is the global object in a browser.  All global variables and functions
   are properiets of the window object

   Properties:
   window.innerWidth and window.innerHeight are the dimensions of the viewport

   Methods:
   alert()          displays an alert dialog
   prompt()         displays a dialog box to take user input
   confirm()        displays a confirmation dialog
   setTimeout()     executes code after a specified delay
   setInterval()    executes code repeatedly at specified intervals
*/

console.log("Viewport width:", window.innerWidth);
console.log('Viewport height:', window.innerHeight);

/*
2. location Object 
    contains information about the URL and allows you to manipulate it

    Properties:
    location.href           full URL of the page
    location.protocol       http or https for example
    location.hostname       example: wwww.example.com
    location.pathname       path of the current page

    Methods:
    location.reload()       reloads the current page
    location.assign(url)    navigates to a new URL
*/


console.log("Current URL:", location.href);
// location.reload(); 
// location.assign('https://www.codewars.com/kata/547c71fdc5b2b38db1000098/javascript')



/*
3. navigator Object  
    contains information about the browser and operating system

    Properties:
    navigator.userAgent     string containing information about the browser
    navigator.language      language of the browser
    navigator.onLine        boolean indicating if the browser is online
*/

console.log("Browser Info:", navigator.userAgent);
console.log("Is online:", navigator.onLine);
console.log("User Agent:", navigator.language);

/*
4. screen Object
    provides information about the user's screen
    
    Properties:
    screen.width and screen.height  are the full width and height of the screen
    screen.availWidth and screen.availHeight are the available width and height 
        excluding OS taskbars  
*/

alert(`Screen size w x h: ${screen.width} x ${screen.height}`);
console.log("Screen available width:", screen.availWidth);
console.log("Screen availabl height:", screen.availHeight);


/* 
5. history Object
    allows navigation through the browser's history

    Properties:
    history.length 

    Methods:
    history.back()
    history.forward()
    history.go(delta)

*/

console.log("History length:", history.length);
//history.back(); // Goes to the previous page


/* 
When debugging pay attention to 
 - some BOM features may behave differently in different browswers
 - use navigator.userAgenet or feature detection to tailor your code
 - manipulating location or accessing iframe content is subject to browser security policies
 - Use browser dev tools to set breakpoints and inspect BOM properties  */


/*
Practice Problems
	1.	Write a script that:
	•	Logs the current URL to the console.
	•	Checks if the browser is online.
	•	Reloads the page if the user confirms via a confirm() dialog.

	2.	Create a function that:
	•	Checks the available screen width and height.
	•	Alerts the user if the screen is less than 800px wide. 
*/

console.log('current location', location.href);
console.log('Are you online?', navigator.onLine);
document.getElementById("reloadButton").addEventListener("click", function () {
    if (confirm("Do you want to reload the page?")) {
      location.reload();
    } else {
      console.log("User chose not to reload the page.");
    }
  });

  function screensize() {
    if (screen.availWidth < 800){
        alert("The screen is less than 800px")
    }
  }
  
  screensize()
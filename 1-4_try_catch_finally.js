"use strict";
/* 1.4 Implement exception handling 
• try, catch, finally 
 */


/* Purpose: to handle runtime errors from things like invalid input, 
file read/write errors,  or 
network failures without disrupting program execution 

Core idea is the code that may throw an error is wrapped in a try 
block and errors are caught and handled in the catch block.*/

/* TRY BLOCK
contains the code that may throw an error
if no error occurs, the try catch block is ignored 
a try block cannot stand alone without a catch or a finally

CATCH BLOCK
executes if an error is thrown in the try block
provides access to the error object for inspection and handling 


FINALLY BLOCK
always executes regardless of whether or not an error occurred
useful for cleanup actions like closing files, stopping loaders or 
clearing resources

A single try block can have
 - one or none catch block
 - one or none finally block

You can have multiple independent try-catch-finally constructs in a script.
You can nest try-catch-finally in any one of the try-catch-finally blocks
*/



/* */
try {
    let result = 10 / 0; // This won't throw an error (dividing by zero results in Infinity)
    console.log(result);
  }  catch (error) {
    console.log("An error occurred:", error.message); // Outputs: An error occurred: undefinedVariable is not defined
  }

/* */
try {
    let result = undefinedVariable + 1; // This throws a ReferenceError
  } catch (error) {
    console.log("An error occurred:", error.message); // Outputs: An error occurred: undefinedVariable is not defined
  }

/* */
try {
  console.log("Trying something risky...");
  throw new Error("Oops!"); // Simulating an error
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Cleanup complete.");
}
// Output:
// Trying something risky...
// Caught an error: Oops!
// Cleanup complete.


/* If no error occurs in the try block:
  - try block executes
  - finally block executes
 
 If an error occurs in the try block:
  - try block executes
  - catch block executes
  - finally block executes
  
If the error occurs outside the try block:
  - none of try, catch or finally will execute
  */

  /* ERROR OBJECT
  when an error occurs, the catch block recieves the error object
  this object contains information properties:
  name -> The type of error (such as ReferenceError)
  message -> Description of the error
  stack -> stack trace showing where the error occured
   */
  try {
    JSON.parse("{invalid json}");
  } catch (error) {
    console.log("Error Name:", error.name); // SyntaxError
    console.log("Error Message:", error.message); // Unexpected token i in JSON at position 1
    console.log("Stack Trace:", error.stack); // Stack trace details
  }

  // Basic Try-Catch Example
  try {
    let result = 10 / x; //throws a ReferenceError because x was not defined
  } catch(error) {
    console.log('Error: ',error.message);
  } finally {
    console.log('Finshed Error Handling');
  }

  // Handling specific errors
  try {
    let obj = null;
    console.log(obj.property); //throws TypeError
  } catch (error) {
    if (error instanceof TypeError) {
        console.log('TypeError caught!');
    } else {
        console.log('Other error caught: ', error.message);
    }
  }

  //Using finally for cleanup:
  try{
    console.log('Opening some resource ...');
    throw new Error ("Something went wrong!")
  } catch (error) {
    console.log('Error caught: ', error.message);
  } finally {
    console.log('Closing resource...');
  }

  //Nested try-catch blocks
  try {
    try{
        JSON.parse('{invalid json}'); //throws SyntaxError
    } catch(innerError) {
        console.log('Inner catch: ', innerError.message);
        throw new Error("Outer error triggered!"); //Re-throws error
    }
  } catch (outerError) {
    console.log('Outer catch: ', outerError.message);
  }

  /* Best Practices
  - Wrap ony the code likely to throw errors in try blocks
  - use console.error or send logs to an external logging system 
  - Provide user-friendly messages or fallback mechanisms when errors occur
  - use finally to free up resources or reset states to ensure the program remains stable
  - always handle errors, don't leave catch blocks empty
  - preempt errors by validating inputs before attempting risky operations
  */

  /* try, catch, and finally blocks are block scoped.
  let and const declared variables are confined to the block
  the variable names can safely be reused in different blocks */
  try {
    let result = 10;
    console.log("Try result:", result); // Try result: 10
  } catch (error) {
    let result = "Error occurred!";
    console.log("Catch result:", result); // Catch result: Error occurred!
  } finally {
    let result = "Cleanup done.";
    console.log("Finally result:", result); // Finally result: Cleanup done.
  }
  
  // You can declare 'result' again here without issues
  let result = "Outside all blocks";
  console.log("Outside result:", result); // Outside result: Outside all blocks

//nested try-catch example reusing variable name
try {
    let message = "Outer try block";
    console.log(message); // Outer try block;
    try {
      let message = "Inner try block";
      console.log(message); // Inner try block
      throw new Error("Inner Catch triggered");
    } catch (error) {
      let message = "Inner catch block";
      console.log(message); // Inner catch block
    }
    throw new Error("outer catch block triggred")
  } catch (error) {
    let message = "Outer catch block";
    console.log(message); // Outer catch block
  }
  
  //console.log(message); // ReferenceError: message is not defined
 
/* block scoping is helpful in scenarios where 
 - different error scenarios need separate handling logic
 - the same variable name is reused to represent similar concepts 
 in different contexts */

 try {
    let result = someRiskyOperation();
    console.log("Operation successful:", result);
  } catch (error) {
    let result = "Failed due to: " + error.message;
    console.log(result);
  } finally {
    let result = "Final cleanup";
    console.log(result);
  }
  
  // No variable conflicts; all 'result' variables are scoped to their 
  // respective blocks.

/* The parameter inside the catch block is a dummy variable similar to a
function parameter and can be named what ever you like. It always reprsents
the exception object thrown in the try block.
The dummy variable name is just a label for the error object and has no 
intrinsic meaning
*/
try {
    throw new Error("Something went wrong!");
  } catch (Fred) { // Using Fred as the name of the error object
    console.log("Error:", Fred.message); // Error: Something went wrong!
    console.log("Error Name:", Fred.name); // Error Name: Error
  }
  /* because the name of the parameter doesn't affect the functionality,
  you can use descriptive names 
  However error, err, and e are generally preferred because it makes the 
  code self-documenting and easier for others to understand*/

  try {
    let x = 1 / 0; // This doesn't throw an error (Infinity), so no exception
  } catch (mathIssue) {
    console.log("Caught an issue:", mathIssue.message); // Would execute if there were an error
  }

  /* in ES10/ES2019, you can omit the parameter if you don't need the object */
  try {
    throw new Error("Something happened!");
  } catch {
    console.log("An error occurred, but we don't care what it is.");
  }

  try {
    throw new Error("Oops!");
  } catch (oops) { // Poor naming choice
    console.log(oops.message); // "Oops!"
  }
  
  // Better:
  try {
    throw new Error("Oops!");
  } catch (error) { // Clear and self-documenting
    console.log(error.message); // "Oops!"
  }

  /* You can use try-finally without a catch.  
  This creates executable code that must run regardless of whether an 
  exception occurs or not without handling the error explicitly.
   
  The try block contains the code that might throw an exception.
  The finally block executes after the try block regarless of whether
  an error occurred or not. The finally block is still used for clearn-up
  tasks like closing files, stopping loaders, or releasing resources.
  
  With no catch block, if the exception occurs, it propogates (bubbles) to 
  high levels in the call stack

  You might use try-finally when 
   - you don't care about handling the error in the current function 
    but still want to guarantee clean up before the error propagates
    for example, if you're working in a utility function where another
    part of the application will handle the error.
    If you don't need to handle the error right there, adding a catch 
    block would be unnecessary and redundant.  letting the error propagate
    allows a higher-level part of the program to handle it.

When an error occurs in a try block and isn't handled (there is no catch block)
the error propagates up the call stack which means the error moves to the 
calling function and so on until 
- a higher level function has a try-catch block to handle it
- the error reaches the global scope (uncaught error) which can crash the
    application
    
*/
function level1() {
    level2();
  }
  
  function level2() {
    level3();
  }
  
  function level3() {
    throw new Error("Error in level3");
  }
  
  try {
    level1();
  } catch (error) {
    console.log("Caught error:", error.message); // "Caught error: Error in level3"
  }
/*the error in lvel3 propagates up through level2 and level1 until it 
is caught in the try catch block 

Is this bad? Not inherently
If no catch block exists, the error doesn't disappear silently.
It moves up the stack until its handled or logged
You can handle errors in one central location making debugging and 
recovery easier.
It can be problematic if you don't want errors to reach the global scope or 
if you want to handle specific types of errors locally before they 
propagate.

A catch block can prevent propagagion but it depends on what you do inside
the block.  If you rethrow the error, it will continue propagating.
*/

//stopping propagagion:
try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Caught error:", error.message);
    // No re-throw, propagation stops here
  }
  console.log("Program continues...");
  // Output:
  // Caught error: Something went wrong!
  // Program continues...


  /*
  // allowing propagation
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.log("Caught error:", error.message);
    throw error; // Re-throwing the error
  } 
  console.log("This will never execute.");
  // Output:
  // Caught error: Something went wrong!
  // Uncaught Error: Something went wrong!
  // broken program
*/


  //cleanup with rethrowing
  try {
    try {
      throw new Error("Inner error occurred!");
    } catch (error) {
      console.log("Caught inner error:", error.message);
      throw error; // Re-throw the error
    } finally {
      console.log("Inner finally block executed.");
    }
  } catch (error) {
    console.log("Caught outer error:", error.message);
  }


  /* while you can use try-catch-finally instead of if-else, it is 
  computationally expensive */
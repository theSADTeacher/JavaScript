"use strict";
/* 2.2 Declare and use arrays 
• Single-dimensional arrays; multi-dimensional arrays; iteration; initialization;  
defining, sorting, and searching an array; push, pop, shift, and unshift  
methods; length property; accessing an array element 
 */


// arrays are zero indexed

// single array
let colors = ["red", "green", "blue"];

// accessing using square bracket notation around the index
let firstColor = colors[0]
console.log('first Color', firstColor);
colors[0] = 'purple'
firstColor = colors[0]
console.log('first Color', firstColor);
colors[3]= "amber"
console.log('colors array:', colors);

// multi-dimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17],
    [18],
    [19],
    [20, 21, 22, 23]
  ];

// access using format array[row][col]
console.log('matrix elements; ', matrix[3][5], matrix[1][1], matrix[6][0]);


// can be initialized empty and dynamically constructed
let numbers = []; 
numbers.push(21); 
numbers.push(16); 
numbers.push(1);  
numbers.push(48); 
numbers.push(-31); 
console.log('numbers array after push 21, 16, 1, 48, -31: ',numbers);




let fruits = ['orange','watermelon','starfruit','apple','kiwi','jackfruit','banana'];

//----- PROPERTIES -----
// length starts at 1 and counrs
console.log('matrix length:', matrix.length);

// using length to change the length of the array
matrix.length = 5
console.log('matrix length:', matrix.length);
console.log('new matrix: ', matrix);


// ---- METHODS ------
// isArray checks if the value is an array
console.log(Array.isArray(fruits)); 
console.log(Array.isArray(matrix)); 

  // forEach executes a provided function once for each array element
colors.forEach(function(color) {
    console.log('color elements:', color);
  });

// sort arranges the elements, in place,  small to large  or alphabetically
numbers.sort();             
console.log('numbers array aftr sort: ', numbers);
colors.sort();             
console.log('colors array aftr sort: ', colors);

// indexOf returns the index of the matching element
let index = colors.indexOf("blue"); 
console.log('index of blue in colors:',index);

// push appends to the end
numbers.push(2);  // Array is now [1, 2]
console.log('numbers array after push 2: ',numbers);

// pop removes from the end
numbers.pop();    // Returns 2, array is now [1]
console.log('numbers array after pop: ',numbers);

// shift removes from the front
numbers.shift();    // Returns 1, array is now empty
console.log('numbers array aftr shift: ',numbers);

// unshift appends to the front
numbers.unshift(1); // Array is now [1]
console.log('numbers array after unshift 1:', numbers);

// map creates a new array with the results of calling 
// the provided function on each element fo the calling array
let lengths = fruits.map(fruit => fruit.length);
console.log(lengths); 

// filter creates a new array with results of calling a function
// on every element in the calling array
let longFruits = fruits.filter(fruit => fruit.length > 7);
console.log(longFruits); 

// reduce appplies a function against an accumulator and each
// element in the array, L -> R, to reduce it to a single value
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); 
     // reduce used to sum an array  ->sum() in Python
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 
console.log(sum); 
   // reduce used on a string array  -> join() in Python
let words = ["Hello", "world", "from", "ChatGPT"];
let sentence = words.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
}, ""); 
console.log(sentence); 

// slice returns a shallow copy of an array with no ability to specify step size
// arr.slice(inclusive start, exclusive end)
// start is optional , if missing
// end is optional, if missing
// negative indexing is tolerated
let arr = ['A', 'd', 'i', 'r', 'a'];

    // Start is omitted
console.log('arr.slice(undefined,3): ', arr.slice(undefined,3)); 

        // End is omitted
console.log('arr.slice(2): ',arr.slice(2));  

    // Both start and end are omitted
console.log('arr.slice(): ',arr.slice());  

    // Negative start
console.log('arr.slice(-3)',arr.slice(-3)); 

    // Start is positive, end is negative
console.log('arr.slice(1, -1)',arr.slice(1, -1)); 

    // Both start and end are negative
console.log('arr.slice(-4, -1)', arr.slice(-4, -1)); 

    // Start is negative, end is positive
console.log('arr.slice(-4, 3)', arr.slice(-4, 3)); 

// splice changes the contents of an array, in place, by removing or replacing
//arr.splice(index to start, count to remove, what to replace with)
console.log('fruits before splicing: ', fruits);
    // remove many, replae with one
fruits.splice(1, 5, 'elderberry');  //at index 1, remove 0, replace with 'mango'
console.log("fruits.splice(1, 0, 'mango'): ",fruits); 
    // Replace element 1 with many
fruits.splice(1, 1, 'blueberry', 'blackberry','banana','lime','lemon','date','cherry'); // At index 1, remove 1 element, insert 'blueberry' & 'blackberry'
console.log('fruits.splice(1, 1, *many*)',fruits); 
    // purely to remove
fruits.splice(2, 2); // at index 2, remove 2, replace with nothing
console.log('fruits.splice(2, 2): ',fruits); 
   // purely to add elements
fruits.splice(3, 0, 'banana', 'grape'); // at index 3, remove 0 elements, add new elements
console.log("fruits.splice(3, 0, 'banana', 'grape'): ", fruits); 
   
// indexOf returns the index of the first instance or -1 if not found
let fruitIndex = fruits.indexOf('banana');
console.log('first banana is located at: ', fruitIndex); // 2

// find returns the first element that satisfies the test function
let fruit = fruits.find(fruit => fruit.startsWith('b'));
console.log(fruit); 

// findIndex returns the index of first element in that satisfies the test function
let bWordIndex = fruits.findIndex(fruit => fruit.startsWith('b'));
console.log(bWordIndex); 

// includes returns true if value in the entries otherwise false
let hasKiwi = fruits.includes('kiwi');
console.log(hasKiwi); 

//join  puts all the elements into a string using the provided separator
let fruitString = fruits.join(', ');
console.log(fruitString); 

//reverse reverses elements in place
fruits.reverse();
console.log(fruits); 

// sort sorts in place, alphabetically or small to large numerically
fruits.sort();
console.log(fruits);


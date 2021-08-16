console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ){
  return `hello, ${name}`;
}

console.log('testing helloName: ', helloName( 'john') );
console.log('testing "Nelson": ', helloName('Nelson') );
// Remember to call the function to test

// 3. Function to add two numbers together & return the result
function addNumbers( num0, num1 ){
  console.log('adding 2 numbers', num0, num1);
  return num0 + num1;
  // return firstNumber + secondNumber;
}
addNumbers();
console.log('Sum of: ', addNumbers( 3, 9));
console.log('Sum of: ', addNumbers( 4, 12));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2){
  console.log( 'Multiplying 3 numbers: ', num0, num1, num2);
  let answer = num0 * num1 * num2;
  return answer;
}
multiplyThree()
console.log('Product of ', multiplyThree(2, 4, 5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ){
  if ( number > 0 ){
    return true;
}
  else
    return false;
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
isPositive()
console.log( '3 is greater than 0 so,', isPositive(3) );
console.log( '0 is equal to so, ', isPositive(0) );
console.log( '-3 is less than so,', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let listBag = ['sock', 'bag', 'shoe', 'hat']
  console.log( listBag )

let lastElement = listBag[listBag.length - 1]

function getLast( item ){
  if ( item < listBag.length ){
    return 'undefined';
}
  else {
    return lastElement;
  }
}

console.log('last item of array is: ', getLast());

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find




// find function start
function find( clothing ){
  for( x=0; x<listBag.length; x++ )
  if( clothing === listBag[x] ){
   return true;
 }
  return false;
}
console.log('"hat" is in the array:', find('hat'));
find('cat')
//find fucntion end






// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

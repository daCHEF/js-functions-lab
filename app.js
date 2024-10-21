/* Exercise 1: maxOfTwoNumbers()--------------------------------------

S1: In this exercise, create a function named maxOfTwoNumbers. 
S2: It should take two numbers as inputs and return the larger number. 
S3: If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  

/* Exercise 2: isAdult()----------------------------------------------


Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

// Step 1: Write a function named isAdult
// Step 2: Set parameter
// Step 3: Use if else statement
// Step 4: return 'Adult' if 18+; 'Minor' if not
// Step 5: Invoke function

const isAdult = (a) => {
 if (a >= 18) {
   return 'Adult';
 } else {
   return 'Minor';
 }
}

console.log('Exercise 2 Result:', isAdult(17));


/* Exercise 3: isCharAVowel()-----------------------------------------

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

// Step 1: Create function named isCharAVowel
// Step 2: Assign parameter
// Step 3: Create vowel array
// Step 4: return result
// Step 5: Invoke function a few times to test

const isCharAVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char)
}

console.log('Exercise 3 Result:', isCharAVowel('a'));
console.log('Exercise 3 Result:', isCharAVowel('b'));
console.log('Exercise 3 Result:', isCharAVowel('e'));


/*Exercise 4: generateEmail()-----------------------------------------

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// Step 1: Create function generateEmail
// Step 2: Assign parameters
// Step 3: return the outcome
// Step 4: Invoke function and test it

const generateEmail = (name, domain) => {
    return name + '@' + domain;
}

console.log('Exercise 4 Result:', generateEmail('YERRR', 'BingBong.com'));


/* Exercise 5: greetUser()--------------------------------------------

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

/* Step 1: Define function called greetUser
   Step 2: Define all parameters (name & tod)
   Step 3: Concatenate return variables
   Step 4: return personlized message
   Step 5: Invoke function and test results */

const greetUser = (name, tod) => {
    return "Yo " + name + ', up for a codathon this ' + tod + '?';
}

console.log('Exercise 5 Result:', greetUser('Aleks', 'morning'));


/* Exercise 6: maxOfThree()-------------------------------------------

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

/* Step 1: Create maxOfThree function
   Step 2: Assign pararmeters (xyz)
   Step 3: Use if else statement to return largest number
   Step 4: return the reuslts
   Step 5: Invoke function and test results */

const maxOfThree = (x, y, z) => {
    if (x >= y && z) {
        return x;
    } else if (y >= x && z) {
        return y;
    } else if (z >= x && y) {
        return z;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 8, 11));
/* Comment:
The function outputs the incorrect variable when z 
is the lager number, but correct when x/y are larger 🤔 */


/* Exercise 7: calculateTip()-----------------------------------------

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

// Step 1: Create calculateTip function
// Step 2: Assign 2 arguments: total bill & tip percent(whole num)
// Step 3: Calculate tip
// Step 4: return amount of tip
// Step 5: Invoke function to test results

const calculateTip = (billAmount, tipPercent) => {
    return billAmount * (tipPercent / 100)
}

console.log('Exercise 7 Result:', calculateTip(50, 10));


/* Exercise 8: convertTemperature()-----------------------------------

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

// Step 1: Define function convertTemperature
// Step 2: 2 arguments temp and string (scale for Celcius & Fahrenheit)
// Step 3: Convert Fahrenheit/Celcius to other scale
// Step 4: return converted temperature
// Step 5: Invoke function to test results

const convertTemperature = (temperature, scale) => {
    if (scale === 'C') {
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        return (temperature - 32) * 5/9;
    }

}

console.log('Exercise 8 Result:', convertTemperature(32, "F"));


/* Exercise 9: basicCalculator()--------------------------------------

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

/* Step 1: Create a function named basicCalculator.
   Step 2: Create 3 arguments: two numbers and a string representing 
           an operation ('add', 'subtract', 'multiply', 'divide')
   Step 3: Perform the provided operation on the two numbers.
   Step 4: When order is important, treat 1st param as 1st operand; the
           2nd param as 2nd operand.
   Step 5: return calculation
   Step 6: Invoke the function to check results */

const basicCalculator = (a, b, operation) => {
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else if (operation === 'multiply') {
        return a * b;
    } else if (operation === 'divide') {
        return a / b;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


/* Exercise 10: calculateGrade()--------------------------------------

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/

/* Step 1: Define a function called calculateGrade
   Step 2: It should take a numerical score and return the 
           corresponding letter grade (A, B, C, D, F)
   Step 3: 
   Step 4: return the grade
   Step 5: Invoke the function to check results  */

const calculateGrade = (grade) => {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80 && grade <= 89) {
        return 'B'
    } else if (grade >= 70 && grade <= 79) {
        return 'C'
    } else if (grade >= 60 && grade <= 69) {
        return 'D'
    } else if (grade < 60) {
        return 'F'
    } 
}

console.log('Exercise 10 Result:', calculateGrade(45));


/* Exercise 11: createUsername()--------------------------------------

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/

/* Step 1: Define a function called createUsername
   Step 2: It should take a first & last name and return a username
   Step 3: The username should be a combination of the following:
            - First three letters of the first name.
            - First three letters of the last name.
            - Total character count of first and last name combined
   Step 4: return the results
   Step 5: Invoke the function to check results */

const createUsername = (firstName, lastName) => {
    let firstThreeFirstName = firstName.substring(0, 3);
    let firstThreeLastName = lastName.substring(0, 3);
    let totalLength = firstName.length + lastName.length;

    let username = firstThreeFirstName + firstThreeLastName + totalLength;

    return username;
}

console.log('Exercise 11 Result:', createUsername("Ay", "ooo"));


/* Exercise 12: numArgs()---------------------------------------------

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

const numArgs = (...args) => {

    return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));


// I survived...
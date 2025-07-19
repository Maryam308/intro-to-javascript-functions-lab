/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

//!###############################################################
/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (number) => (number >= 18 ? "Adult" : "Minor");
console.log("Exercise 2 Result:", isAdult(21));

//!###############################################################
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) =>
  ["a", "e", "i", "o", "u"].includes(char.toLowerCase()) ? true : false;
console.log("Exercise 3 Result:", isCharAVowel("a"));

//!###############################################################
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (username, domain) => `${username}@${domain}`;
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));
//!###############################################################
/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

const greetUser = (username, timeOfDay) => {
  const validTimes = ["morning", "afternoon", "evening"];
  const time = timeOfDay.toLowerCase();

  if (validTimes.includes(time)) {
    return `Good ${time}, ${username}!`;
  } else {
    return "Please provide a valid time of day: morning, afternoon, or evening.";
  }
};

console.log("Exercise 5 Result:", greetUser("Sam", "morning"));
//!###############################################################
/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
const maxOfThree = (...num) => {
  if (num.length === 3) {
    // Check that all values are numbers
    if (num.every((n) => typeof n === "number")) {
      return Math.max(...num);
    } else {
      return "All inputs must be numbers.";
    }
  } else {
    return "Please enter 3 numbers :)";
  }
};

console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

//!###############################################################
/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (bill, tip) => {
  //check if the length of the args >= 2
  if (arguments.length >= 2) {
    //check if the bill and tip are provided as whole integers
    if (Number.isInteger(bill) && Number.isInteger(tip)) {
      //calculate the tip
      return (tip / 100) * bill;
    } else {
      return "Please provide whole number values for bill and tip.";
    }
  } else {
    return "Please provide both bill and tip values.";
  }
};

console.log("Exercise 7 Result:", calculateTip(50, 20));

//!###############################################################
/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
const convertTemperature = (temperature, scale) => {
  const scales = ["c", "f"];

  if (arguments.length >= 2) {
    if (typeof scale === "string" && scales.includes(scale.toLowerCase())) {
      scale = scale.toLowerCase();

      if (scale === "c") {
        // convert to Fahrenheit
        return (temperature * 9) / 5 + 32;
      } else if (scale === "f") {
        //  convert to Celsius
        return ((temperature - 32) * 5) / 9;
      }
    } else {
      return "The second argument should be 'C' or 'F'";
    }
  } else {
    return "Please provide at least 2 arguments.";
  }
};

console.log("Exercise 8 Result:", convertTemperature(32, "C"));

//!###############################################################

/*
Exercise 9: basicCalculator()

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

const basicCalculator = (num1, num2, operation) => {
  // Check if the number of arguments is at least 3
  if (arguments.length >= 3) {
    const operations = ["add", "subtract", "multiply", "divide"];

    // Check if operation is valid
    if (
      typeof operation === "string" &&
      operations.includes(operation.toLowerCase())
    ) {
      // Check if num1 and num2 are numbers
      if (typeof num1 === "number" && typeof num2 === "number") {
        switch (operation.toLowerCase()) {
          case "add":
            return num1 + num2;
          case "subtract":
            return num1 - num2;
          case "multiply":
            return num1 * num2;
          case "divide":
            if (num2 === 0) return "Cannot divide by zero";
            return num1 / num2;
          default:
            return "Unexpected error.";
        }
      } else {
        return "Both inputs must be numbers.";
      }
    } else {
      return "Enter a valid operation: 'add', 'subtract', 'multiply', or 'divide'";
    }
  } else {
    return "Please provide two numbers and an operation.";
  }
};

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

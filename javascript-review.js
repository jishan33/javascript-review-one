// These questions are to test how you are progressing through the material, and to give you some feedback about where you might improve. Get through as many of these as you can. If you don’t get through all of them it’s ok - the test is designed to be difficult. If you can’t remember a bit of code, write the pseudo-code that represents how you would write your JS code.

// 1.

// Create an object that has four properties. One property should be set so that the value is a number, another property set to a string, the third to an array, and the fourth to a function. This function should simply console.log the value of the first property.

const movie = {
  title: "The matrix",
  year: "1999",
  cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence FishBurne"],
  showTitle: function () {
    console.log(this.title);
  },
};

// movie.showTitle();

// 2.

// Write a constructor function named Car that takes one argument. It should use that argument to set the brand attribute of the car object. There should be a second attribute that stores the value for colour but this should be explicitly set to ‘red’.

// Note that a constructor function is the old school syntax that was used in javascript before the sugar class syntax came along in ES6. Don't use the sugar syntax for this question!

function Car(brand, color = "red") {
  this.brand = brand;
  this.color = color;
}

const c = new Car("tesla");
// console.log(c.color)
// console.log(c.brand)

// 3.

// Can you access variables defined outside of functions within the scope of functions in JS? Show a simple example of this being used? (Define a constant in global scope and use that in a very simple function.)

const a = 1;
function show() {
  console.log(a);
}

// show();

// 4.

// What two ways can be used to access the properties of objects in JS? Give examples of both (although assume the objects have been defined).

// dot notation
// console.log(movie.year);
// bracket notation
// console.log(movie["year"]);

// 5.

// What is JSON? Be clear but concise.

// JavaScript Object Notation => a lightweight format for sorting and transporting data.

// 6.

// What is a callback function?

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete action.

// 7.

// Define a function with that takes two number arguments and a callback. The function will add the two numbers and pass them to the callback as an argument. Now call this function and in the callback simply console.log out the argument that has been passed through.

function showAddition(num1, num2, cb) {
  let answer = num1 + num2;

  if (cb) {
    return cb(answer);
  }
  return answer;
}

function display(answer) {
  return answer;
}

const b = showAddition(1, 1, display());
// console.log(b);

// 8.
// Why do we use promises?

// use promises to fix callback limitations (callback hell)

// 9.
// What are the two functions at our disposal if we are defining our own promise?
// Hint: They're in the new Promise callback function as parameters.

// resolve and reject

// 10.
// What's the different between the rest and spread syntax?

// Rest operator is used to form and array with any number of arguments.
//Spread operator is to show the values from an array which is opposite to the rest operator.

// 11.
// Define a function myFunc(), it should take 3 number arguments, use the rest syntax in the myFunc parameters and console.log out the value generated from the rest.

// function myFunc(...numbers) {
//   console.log(numbers);
// }

// myFunc(1,2,3);

// 12.
// What is a javascript package manager? Name the 2 main package managers

// Npm and Yarn

// 13.
// What is a package.json? What is it similar to when comparing it to ruby?

// All npm package contain a file in the root, called package.json. This file is used to handle a project's dependencies and give npm information to identify project, ususally it holds variious metadata relevant to a project.

// It is similar to a gemspec which describes the functionality of the package and lists all the dependencies.

// 14.
// a.
// run the following command
// npm init -y

// b.
// Install the package that allows us to get user input in node
// Store the result of the user input in a variable name then console.log the value of the variable on the subsequent line

// let readlineSync = require('readline-sync');
// var userName = readlineSync.question(' Hello, what\'s your name? ');
// console.log('Welcome ' + userName + '^^');

// 15.

// a.
// Define a function called addNum with that takes two number arguments. In this function simply return the addition of these numbers.

function addNum(num1, num2) {
  return num1 + num2;
}

// b.
// Write a second function called numsPlusFunct that takes three arguments, two numbers and a function. Inside numsPlusFunct call the function that is passed as an argument, and pass the two number arguments to this function. numsPlusFunct will return an object where the first property has the value returned from that function call, and the second property is a string.

function numsPlusFunct(num1, num2, cb) {
  const string = "The final number is";
  return string + cb(num1, num2);
}

// c.
// You have now made two functions. Call the numsPlusFunct and pass addNum as the appropriate argument.

// console.log(numsPlusFunct(1,2, addNum))

// 16.
// Define a .txt file and put this text into it => "hello world"
// Using the fs module in node read this text from the file into this program and console.log it
const fs = require("fs");
let sample = fs.createWriteStream("sample.txt");

sample.write("hello world");
sample.end();

// fs.appendFile('node.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// 17.
// What is the difference between synchronous and asynchronous code? Name one way that JS handles asynchronous code.

//Asynchromous programming is a method of programming that allows more than one task to be executed at the same time.

// async is added to functions to tell them to return a promise rather than returnning the value directly.

// 18.
// What is fetch and how does it relate to AJAX? Give an example of how you would use it. What does fetch return? Give a very basic example of fetch.

//Fetch is a Web API and works on broswers. This API was developed to make AJAx requests easier. and it returns a promise. (Asynchronous JavaScript and XML = AJAX)
const fetch = require("node-fetch");

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 19.
// A JS object looks like this: const southernField = { location: “upper”, crop: “sorghum”, watered: false }. Use destructuring to store the value of watered in a variable.

const southernField = {
  location: "upper",
  crop: "sorghum",
  watered: false,
};

const status = southernField.watered;
// console.log(status);

const { watered } = southernField;
// console.log(watered);

// 20.
// a.
// Uncomment the code below.

let newNum = 1;

const myFunc = (num, callback) => {
  newNum *= num;
  callback(newNum);
};

myFunc(10, (sum) => {
  console.log(sum);
});

// b.
// Explain in your own words how this code works. For example you could start with something like:

// myFunc take a nummber and a callback funciion arguments. the number muiltply the newNume  and passed it as an argument in the callback function and invoke the callback function.

// call the myFunc function with a number of 10 and an implicit function to display the argument passed in the callback function on the console.

// 21.
// You might remember the .times method in ruby

// You could do something like this

// 5.times do
// code
// end

// Define a function times() that takes a number and a callback as an argument, the number represents how many times a loop should run, and the callback is the code that is executed each time the loop runs

// Double check the loop is actually running 5 times if you pass in 5 with a console.log in the callback

// You should see 5 outputs

function times(num, cb) {
  for (let i = 1; i <= num; i++) cb();
}
// times(5, () => {
//   console.log("callback");
// });

// 22.
// Define a Person class, the constructor should take name as an argument and set the name to the this, the class should have a prototype method sayHi() that simply outputs console.log("hello")

class Person {
  constructor(name) {
    this.name = name;
    this.age;
    this.height;
  }
  sayHi() {
    console.log("hello");
  }
  addAgeAndHeight(age, height) {
    this.age = age;
    this.height = height;
  }
}

const p = new Person("John");
p.addAgeAndHeight(32, 193);
// p.sayHi();
// console.log(p);

// Implement another prototype method addAgeAndHeight() for your class that takes in age and height (in cms) as arguments (both number type) and adds these arguments as attributes to your person object

// Create a new person and pass in name as an argument, console.log the person object

// Call the sayHi() method on the person

// Call the addAgeAndHeight() method passing in the relevant arguments

// console.log the updated person object showing all three attributes (name, age, height) as being a part of the person object

// 23.

// Define a function named waitBeforeSum that takes 2 numbers as arguments. Your function should sum these numbers together but only after waiting for 4 seconds inside of a setTimeout.

function waitBeforeSum(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num1 === "number" && typeof num2 === "number") {
        resolve(num1 + num2);
      }
      reject("It is not a number");
    }, 4000);
  });
}

// waitBeforeSum(11, 11)
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// What do we need to use to access the value in the setTimeout only after the 4 seconds? Write the code to achieve this.

// When we invoke waitBeforeSum we'll have two different methods we can chain to our promise to avoid getting a pending promise. What are these 2 methods?

// Define another function named accessSum and make it an async function. Using the await keyword call waitBeforeSum inside of the accessSum function and store the resolve in a variable called result. console.log the result inside of the async function

const accessSum = async () => {
  try {
    const result = waitBeforeSum(10, 20);
    await result;
    if(result < 10)
    console.log(result);
    throw new Error('the sum was greater than 10');
  } catch (err) {
    console.log(err.message);
  }
};

// accessSum();

// Add a try and catch block to your accessSum function, make it go into the catch when the sum is greater than 10, when you console.log the the error that you get as a parameter in the catch it should say 'the sum was greater than 10'

// 24.

// a.
// npm install node-fetch

// b.
// Using the following API endpoint access the Australian flag svg link and console.log it
// => https://restcountries.eu/rest/v2/all

// fetch('https://restcountries.eu/rest/v2/all')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// c.
// Using the following API endpoint console.log the yoda text generated from this english phrase "Master Obiwan has lost a planet"
// Hint: you don't need to pay for a subscription
// => https://funtranslations.com/api/yoda

const yodaText = async() => {
  try {
    const response = await fetch('https://api.funtranslations.com/translate/yoda.json?text=Master%20Obiwan%20has%20lost%20a%20planet.')
    const data = await response.json()
    console.log(data);
    
  } catch (err) {
    console.log(err.message)
  }
}
 
yodaText();


// 🎉🎉🎉🎉🎉🎉

// Extra challenges

// Only attempt this if you've completely done everything else

// You'll need to globally install mocha

// npm install --global mocha

// You'll also need to uncomment this code

// const assert = require('assert');

// To run the tests use => mocha <filename> from the command line

// 25.

/*
Once
Creates a version of the function that can only be called one time.
Repeated calls to the modified function will have no effect, returning the value
from the original call. Useful for initialization functions, instead of having
to set a boolean flag and then check it later.

Example:
let total = 0
const count = () => ++total;
let countOnce = once(count);
countOnce()
=> 1
countOnce()
=> 1
*/

// describe('Once', () => {
//   it('returns a function', () => {
//     const exampleOnce = once(() => {})
//     assert.equal(typeof exampleOnce, 'function');
//   });
//   it('only runs once', () => {
//     let total = 0;
//     const count = () => {
//       return ++total;
//     }

//     const countOnce = once(count);
//     assert.equal(countOnce(), 1);
//     assert.equal(countOnce(), 1);
//   });
// });

// 26.

/*
Count By
Sorts a list into groups and returns a count for the number of objects in each
group. Similar to groupBy, but instead of returning a list of values, returns a
count for the number of values in that group.

Example:
_.countBy([1, 2, 3, 4, 5], (num) => {
  return num % 2 == 0 ? 'even': 'odd';
});
=> {odd: 3, even: 2}
*/

// describe('Count By', () => {
//   it('can group true/false', () => {
//     let grouped = countBy([1, 2, 3, 4, 5], (num) => num % 2 === 0);
//     assert.equal(grouped.true, 2);
//     assert.equal(grouped.false, 3);
//   })
//   it('can group lists', () => {
//     const list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//     const grouped = countBy(list, (numWord) => numWord.length);
//     assert.equal(grouped['3'], 4);
//     assert.equal(grouped['4'], 3);
//     assert.equal(grouped['5'], 3);
//   })
// });

// 27.

/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
*/

// let result;
// describe('Find Last Index', () => {
//   it('finds the last index', () => {
//     const objects = [
//       {a: 0, b: 0},
//       {a: 1, b: 1},
//       {a: 2, b: 2},
//       {a: 0, b: 0}
//     ];
//     result = findLastIndex(objects, {a: 0});
//     assert.equal(result, 3);
//   })
//   it('also finds last index', () => {
//     const dogs = [
//       {name: 'tilly', age: 5},
//       {name: 'sally', age: 10},
//       {name: 'rex', age: 10},
//       {name: 'macy', age: 4}
//     ];
//     result = findLastIndex(dogs, {age: 10});
//     assert.equal(result, 2)
//   })
// });

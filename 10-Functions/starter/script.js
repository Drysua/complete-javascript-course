'use strict';


// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your1.2.3.4.5.tasks:
// Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1.
//  Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.
//  Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// Call this method whenever the user clicks the "Answer poll" button.
// Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course



const poll = {
  options: ['JavaScript', 'Python', 'Rust', 'C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const ans = Number(
      prompt(
        `What is your favourite programming language?\n${(function f(array) {
          let string = '';
          for (let i = 0; i < array.length; i++) {
            string += `${i}: ${array[i]}\n`;
          }
          return string;
        })(this.options)}`
      )
    );
    typeof ans === 'number' &&
      ans < this.answers.length &&
      ans >= 0 &&
      this.answers[ans]++;
    this.displayResult(this.answers);
    this.displayResult(this.answers.join(', '));
  },
  displayResult(type) {
    if (Array.isArray(type)) {
      console.log(type);
    } else if (typeof type == 'string') {
      alert(`Poll results are ${type}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const f = poll.displayResult.call({answers : [5, 2, 3]}, [5,2,3].join(', '))
// poll.registerNewAnswer());

// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
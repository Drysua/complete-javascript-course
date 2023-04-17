'use strict';

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.logunderscoreCase
// firstName
// someVariable
// calculateAge
// delayedDeparture
// ✅
// ✅✅
// ✅✅✅
// ✅✅✅✅
// ✅✅✅✅✅

const testData = [
  'underscore_case',
  ' first_name ',
  'Some_Variable',
  '  calculate_AGE',
  'delayed_departure',
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toCamelCase(text) {
  let [result, ...others] = text.trim().toLowerCase().split('_');
  for (const token of others)
    result = [result, capitalizeFirstLetter(token)].join('');
  return result;
}

for (const word of testData) console.log(toCamelCase(word));

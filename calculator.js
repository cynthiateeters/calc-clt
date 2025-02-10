#!/usr/bin/env node
// file: calculator.js
const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

let result = `Solving ${num1} ${operation} ${num2}`;

if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("invalid number");
  process.exit(1);
}

if (operation === "add") {
  result = add(num1, num2);
} else if (operation === "subtract") {
  result = subtract(num1, num2);
} else if (operation === "multiply" || operation === "times") {
  result = times(num1, num2);
} else if (operation === "divide") {
  result = divide(num1, num2);
} else if (operation === "modulus" || operation === "remainder") {
  result = modulus(num1, num2);
} else if (operation === "power") {
  result = power(num1, num2);
} else {
  console.error("unknown operation");
  process.exit(1);
}

if (isNaN(result)) {
  console.error("invalid number");
  process.exit(1);
}

console.log("result: ", result);
process.exit(0);

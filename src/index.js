import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(x => 2 * x);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(x => x > 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
const newNumber2 = numbers.find(x => x > 10);

////FindIndex - find the index of the first item that matches.
const newNumber3 = numbers.findIndex(x => x > 10);

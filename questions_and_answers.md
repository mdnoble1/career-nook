## Questions and Answers Part

1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined


Answer: B: ReferenceError: greetign is not defined. 
Ans will ReferenceError because the variable is not defined.


2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3


Answer: A: NaN.
When the 'sum' function call, is expected to return a numeric value, the actual result of the function call is not a number, resulting in NaN (Not-a-Number).


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError


Answer: A: ['🍕', '🍫', '🥑', '🍔'].
the 'info' object is assigned the value of 'food[0]', which is the first element of the 'food' array, i.e., "🍕". Later, the 'info.favoriteFood' property is reassigned to "🍝". However, this reassignment does not affect the original 'food array'. Therefore, when you 'console.log(food)', it will still output the original 'food' array, which is ['🍕', '🍫', '🥑', '🍔'].



4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return Hi there, ${name};
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError


Answer: B: Hi there, undefined.
The 'sayHi' function expects a 'name' parameter to be passed to it when it's called. However, in the 'console.log' statement, 'sayHi()' is called without providing any argument, so the 'name' parameter inside the function will be 'undefined'. Therefore, the function will return "Hi there, undefined" as the result.


5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4


Answer: B: 2.
The 'forEach' method iterates over each element in the 'nums' array. Inside the callback function, the condition 'if (num)' checks if the current element 'num' is truthy (not equal to 0). For the array 'nums', only the elements 1, 2, and 3 are truthy. Therefore, the 'count' variable is incremented for each of these three truthy values, resulting in a final value of 2.


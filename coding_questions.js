// var foo = 10 + '20';
'1020'

// console.log(0.1 + 0.2 == 0.3);
false

// add(2, 5); // 7
// add(2)(5); // 7
function1
const add = (x, y) => return x + y

function2
const add = x => {
  return function (y) {
    return x + y
  }
}
// function takes an argument - then returns a function that takes a second argument
// this function must add the argument of the first 'add' function and its own argument together
// return that value
// Concept of CLOSURES can be used in this case.
// The function "add" returns another function.
// The function being returned can access the variable in the parent scope
// (in this case variable x)
ARROW FUNCTION:
const add = x => y => x + y

// "i'm a lasagna hog".split("").reverse().join("")
'goh angasal a m\'i'

// ( window.foo || ( window.foo = "bar" ) );
// it is a check to see if a foo function exists in the window.
// if it doesn't, then set it to "bar"


// var foo = "Hello";
// (function() {
//   var bar = " World";
//   alert(foo + bar);
// })();
// alert(foo + bar);
hello world for IIFE
hello undefined for second alert

// Question: What is the value of foo.length?
// var foo = [];
// foo.push(1);
// foo.push(2)
2

// var foo = {n: 1};
// var bar = foo;
// foo.x = foo = {n: 2}
undefined.
bar.x = {n: 2}

foo refers to original foo object - {n: 1}
this original object is referenced by bar
foo.x = foo = {n: 2} is the same as foo.x = (foo = {n: 2})
foo now refers to {n: 2}

now - foo.x = foo
foo on the LHS is {n: 1}.x and foo on the RHS is {n: 2}
affter this assignment:
{ n: 1, x: {n: 2} } - bar refers to this object foo is still just {n: 2}

thus foo.x is undefined as foo only has one attribute
bar.x = {n: 2}

// console.log('one');
// setTimeout(function() {
//   console.log('two');
// }, 0);
// console.log('three')
one,
three,
two
// It's because console.log('two'); will be invoked in the next event loop.

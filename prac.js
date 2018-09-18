// ====================================
// Algorithms:

// FIBONACCI:
function fib(n) {
  arr = []
  arr[0] = 1
  arr[1] = 1

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
    arr.push(arr[i])
  }
  arr.pop()
  return arr
}

// TIME CONVERSION TO MILITARY:
const conv = time => {

  let timeArr = time.split(':')

  let hour = timeArr[0]
  let minutes = timeArr[1]

  let mhour = ''
  let mmin = ''

  if (minutes.endsWith('am')) {
    mmin = minutes.replace('am', '')

    if (hour === '12') {
      mhour = '00'
    } else if (hour === '11' || hour === '10') {
      mhour = hour
    } else {
      mhour = '0' + hour
    }
  } else {
    mmin = minutes.replace('pm', '')
    if (hour === '12') {
      mhour === hour
    } else {
      mhour = (Number(hour) + 12).toString()
    }
  }

  return mhour + ':' + mmin
}

// n people in a room - each person wants to shake every other persons hand.
// 10 people - person 1 will shake 9 hands
// person 2 will shake 8 hands (already shook person 1)
// person 3 will shake 7 hands (already shook person 1 & 2)
// 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = number of handshakes
const handshakes = n => {
  arr = []

  for(i=1; i<=n-1; i++) {
    arr.push(i)
  }
  // console.log(arr)
  return arr.reduce((acc, curr) => acc + curr)
}

//sort an array in ascending order - find middle val
const ints = [3, 6, 2, 9, 34, -1, -8]

const mid = arr => {
  let sortedArr = arr.sort((a, b) => a - b) // sorts in place - returns the array
  // let sortedArr = arr.sort((a, b) => a + b) to sort in descending order

  // for string values in array - .sort() will sort alphabetically by first letter

  let midVal = sortedArr[Math.floor(sortedArr.length / 2)]

  return midVal
}

// recreate JS .join() method: user supplies the separator and array
// iterate over array - each element .toString() + concat with separator
// return string
const join = (sep, arr) => {
  let string = ''
  for (i=0; i < arr.length; i++) {
    let elem = arr[i].toString() + sep
    // push each elem into result string
    string += elem
  }
  let trimmed = string.slice(0, -1) // to remove the separator at the end - copy of string from 0 index to second to last index
  return trimmed
}

// Invert string
const invert = str => str.split("").reverse().join("")

// Invert string in place - can't invert in place as strings are immutable in JS i.e. a primitive not a reference type
const invert = str => {
  let newStr = ""
  for(i=str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

// reverse array in place:
const rev = arr => {
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    let x = arr[i]
    arr[i] = arr[j]
    arr[j] = x

    i++
    j--
  }
  return arr
}

// reverse array in place:
// splice() changes the CONTENTS of array - start at i, don't delete anything, insert arr.pop() value at i index
const rev = arr => {
  for (let i=0; i<arr.length; i++) {
    arr.splice(i, 0, arr.pop())
  }
  return arr
}

// find max/min number in array using JS .apply()
// Math.max or min finds max/min number i.e. Math.max(1, 2, 3)
// Arrays don't have a max/min method - but can APPLY the Math.max/min Method
const max = arr => Math.max.apply(null, arr)

// reverse words, leave punctuation
const revWords = str => {
  let arr = str.split(/\b/)
  // split on word boundary i.e. whole words
  let newArr = []

  for(let i=0; i < arr.length; i++) {
    if (arr[i].match(/[a-zA-Z]/)){
      // if the element contains only letters
      let elem = arr[i].split("").reverse().join("")
      // reverse the word

      newArr.push(elem)
      // push word into new array
    } else {
      newArr.push(arr[i])
      // push space/punctuation as is
    }
  }
  return newArr.join("")
}

const triArea = (b, h) => (b * h) / 2

// Panagram. Using Set to check if a string has all letters of the alphabet
const isPanagram = str => {
  let alphabet = new Set() // an iterable object (like an array) that stores unique values
  let strArr = str.split(/\W+/) // splits string on whitespace and punctuation - leaves only whole words

  let letters = strArr.join("").toLowerCase().split("") // join words, normalize, split into individual characters

  for (i=0; i < letters.length; i++) {
    alphabet.add(letters[i])
  }
  return (alphabet.size < 26)
}

// remove duplicates from array
const unique = arr => {
  let uniqueArr = []

  for (let i=0; i<arr.length; i++) {
    if(uniqueArr.indexOf(arr[i]) === -1) {
      // if the index value of arr[i] does not exist in uniqueArr - indexOf() will return -1
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr
}

const unique = arr => {
  let uniques = new Set()

  for (let i = 0; i < arr.length; i++) {
    uniques.add(arr[i])
  }
  return [...uniques]
}

// unique in order
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
const uniqueInOrder = arr => {
  let results = []

  for(i=0; i<arr.length; i++){
    if(arr[i] !== arr[i + 1]) {
      results.push(arr[i])
    }
  }
  return results
}

// count instances of duplicates
const instances = arr => {
  let results = {}

  for(let i=0; i<arr.length; i++) {
    if (!results[arr[i]])
      results[arr[i]] = 0 // initialize key with 0 value for each unique element
      results[arr[i]] +=1 // increment by 1 with each iteration
    }
    return results
  }

  // valid parens
  const isValid = str => {
    let stack = []
    let openers = ['[', '{', '(']
    let closers = [']', '}', ')']

    for(let i = 0; i < str.length; i++) {
      if(openers.indexOf(str[i]) !== -1) { // if the paren is an opener...
        stack.push(closers[openers.indexOf(str[i])]) // push its partner closer paren into the stack i.e. every opening paren must have a partner
        console.log(stack)
      } else { // if the paren you're iterating is a closer...
        if (stack.pop() !== str[i]) { // and if the first paren off the stack does not match str[i] (the closing paren being iterated)...
          return false // return false because this means the paren being iterated is not the partner to a opening paren that previously pushed in a corresponding closer
        }
      }
    }
    // if all conditions pass - return true for balanced parens
    return true
  }

  //Isogram
  const isogram = str => {

    let results = new Set() // will store unique values only
    let arr = str.toLowerCase().split("") // normalize string - turn into array

    for(let i = 0; i < arr.length; i++) {
      results.add(arr[i])
    }
    return (results.size === arr.length)
  }

  //palindrome
  const isPalindrome = str => {
    //remove punctuation/spaces/normalize
    let normStr = str.split(/\W+/).join("").toLowerCase()
    let normStrPal = normStr.split("").reverse().join("")

    return normStr === normStrPal
  }

  //FizzBuzz for 100
  const fizzBuzz = n => {
    let results = []
    for(let i=1; i <= n; i++) {
      if (i % 15 === 0) {
        results.push('fizzBuzz')
      } else if (i % 3 === 0) {
          results.push('fizz')
        } else if (i % 5 === 0) {
            results.push('buzz')
        } else results.push(i)
      }
      return results
    }


  // duplicate and flatten array - EXPERIMENTAL - limited compatability
  const flatten = arr => {
    let arr2 = arr.slice()
    arr.push(arr2)
    let result = arr
    return result.flat()
  }

  const flatten = arr => {
    let results = arr.slice()
    for(i=0; i < arr.length; i++) {
      results.push(arr[i])
    }
    return results
  }

  const flatten = (arr1, arr2) => {
    for (i=0; i< arr2.length; i++) {
      arr1.push(arr2[i])
    }
    return arr1
  }

  // arr1.concat(arr2)
  // let new = [...arr1, ...arr2]

  arr.includes(value)

  ENQUEUE AND DEQUEUE

 const twoStacks = () => {
   let inStack = []
   let outStack = []
 }

 twoStacks.prototype.enqueue = function(item) {
   this.inStack.push(item)
 }

 twoStacks.prototype.dequeue = function() {
   if(this.outStack.length === 0) {
     while (this.inStack.length > 0) {
       let elem = this.inStack.pop()
       this.outStack.push(elem)
     }

     if (this.outStack.length === 0) {
       return undefined
     }
   } else {
     return this.outStack.pop()
   }
 }

// nth fibonacci Number

const numb = n => {
  let fibArr = [0, 1, 1]

  for(let i=3; i<=n; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    fibArr.push(fibArr[i])
  }
  fibArr.pop()
  return fibArr[n]
}

const rev = arr => {
  for(i=0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop())
  }
  return arr
}

const isPanagram = str => {
  let alphabet = []

  let strArr = str.split(/\W+/)
  let letters = strArr.join('').toLowerCase().split("")

  for(i=0; i<letters.length; i++) {
    if(alphabet.indexOf(letters[i]) === -1) {
      alphabet.push(letters[i])
    }
  }
  return alphabet.length >= 26
}


const rev = str => {
  let newStr = ""

  for (i=str.length-1; i>=0; i--) {
    newStr += str[i]
  }
  return newStr
}

// instances of a value in array:

const instances = (val, arr) => {
  let counter = 0

  for(i=0; i < arr.length; i++) {
    if(arr[i] === val){
      counter++
    }
  }
  return counter
}

// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
const sum = (arr, target) => {
let result = []

  for (let i=0; i < arr.length; i++) { // for each element
    for (let j=i+1; j < arr.length; j++) { // loop through the array again and check...
      if(arr[i] + arr[j] === target) { // if original element has a matching element that === target
        result.push(i) //push index to results
        result.push(j)
      }
    }
  }
      return result
}

// Given a 32-bit signed integer, reverse digits of an integer.
const revInts = ints => {
  let revArr = (ints).toString().split("").reverse().join("")
  return Number(revArr)
}

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
const palNum = num => {
  pNum = 0
  if(num < 0) {
    return false // negative numbers can't be palindromes
  } else {
    let strNum = (num).toString().split("").reverse().join("")
    pNum = Number(strNum)
  }
  return (num === pNum)
}

// merge 2 sorted lists
const merge = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2]
  return newArr.sort((a, b) => a - b)
}

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
const inPlaceUnique = (arr) => {
  for(i=0; i<arr.length; i++) {
    if(arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
      arr.splice(i, 1)
    }
  }
  return arr
}

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
const del = (arr, val) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1)
    }
  }
  return arr
}

// using filter method - this returns a new ARRAY
const del = (arr, val) => {
  return arr.filter(elem => elem !== val)
}

const position = (haystack, needle) => {
  return haystack.indexOf(needle)
}

// check to see if val is outside array i.e. smaller than first index/larger than last
const index = (arr, val) => {
  let indexPosition = 0

  if(arr.indexOf(val) === -1) {
    // check to see if smaller
    if(val < arr[0]) {
      return 0 // would be at first index position
    } else if (val > arr[arr.length - 1]) { // if val is greater than last element in the array
      return arr.length // would be in the lst indexical position
    } else //iterate over the array values
      for (i=0; i<arr.length; i++) {
        // if val is 1 more than the previous index AND 1 less than the next index
      if(val === (1 + arr[i - 1]) && (1 - arr[i + 1])) {
        indexPosition = i // i is its indexical position
      }
    }
    return indexPosition
  } else
    return arr.indexOf(val)
}


// given an array of numbers - make each odd number even and each even number off
// convert array in place
const convert = arr => {
  for(i=0; i<arr.length; i++){
    arr[i]++
  }
  return arr
}


//return first duplicate
const duplicate = arr => {
  for(i=0; i<arr.length; i++) {
    if(arr[i] === arr[i + 1]) {
      return arr[i]
    }
  }
}

//is number square of 2
const isSquare = n => Math.sqrt(n) === 2

//is number isSquare
const isSquare = n => n > 0 && Math.sqrt(n) % 1 === 0

//is number prime - number is prime if it is not divisible by any prime less than or equal to it's square prototype
const isPrime = n => {
  if (n < 2) return false

  let squareRoot = Math.floor(Math.sqrt(n))

  for (i=2; i<=squareRoot; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// remove duplicates in place
const inPlace = arr => {
  arr.forEach((elem, i) => {
    if(elem === arr[i -1] || elem === arr[i + 1]) {
      arr.splice(i, 1)
    }
  })
  return arr
}


const isPalindrome = function (str) {

  let normStr = str.toLowerCase()
  let newStr = normStr.split("").reverse().join("")

  return normStr === newStr
}

// 5 factorial 5 x 4 x 3 x 2x1

const factorial = n => {

  let arr = []

  for(i=1; i<=n; i++) {
    arr.push(i)
  }
  return arr.reduce((acc, curr) => acc * curr)
}

const factorial = num => {
  if (num === 0 || num === 1)
  return  1

  for (let i=num - 1; i >= 1; i--) {
    num *= i
  }
  return num
}

// find most common element in array
const mostCommon = arr => {
  let results = {}
  let resValues = []
  let higestOccurance = 0
  let resultsArr = []


  for (i=0; i<arr.length; i++) {
    if (!results[arr[i]])
    results[arr[i]] = 0
    results[arr[i]] +=1
  }

  for(key in results) {
  resValues.push(results[key])
  }

  // find highest value
  resValues.sort((a, b) => a - b)
  highestOccurance = resValues.pop()

  for (key in results) {
    if (results[key] === highestOccurance) {
      resultsArr.push(key)
    }
  }
  return resultsArr
}

//rotate array k number of steps
// pop() and unshift() k number of times
const rotateSteps = (arr, k) => {
  for(i=1; i<=k; i++) {
    let elem = arr.pop()
    arr.unshift(elem)
  }
  return arr
}

//factorial trailing zeros

const factorialZeros = (n) => {
  let result = 0
  let counter = 0

  for(i=n-1; i>=1; i--) {
    n *= i
    result = n
  }

  let resArr = result.toString().split("")

  for (i=0; i < resArr.length; i++) {
    if(resArr[i] === '0') {
      counter++
    }
  }
  return counter
}

// write a function that returns the area of a circle
// given the radius of a circle as its argument
// the formula is pi times radius squared

// cont area = r => Math.PI * Math.pow(Math.round(r), 2)
//
// // write a function that receives the following input
// // and returns the expected output
// //input
// {
//   users: [
//     { id: '1', name: 'David', position: 'Web' }, // id is always present in user objects
//     { id: '8', name: 'Jenn' },
//   ]
// }
// // output
// {
//  1: { id: '1', name: 'David', position: 'Web' },
//  8: { id: '8', name: 'Jenn' },
// }
//
//
// const conv = obj => {
//  // obj[users] iterate over array // each element in the array - match key 'id' - push that key to a empty placeholder object // return placeholder
//
//  let results = {}
//  let array = obj[users]
//
//  for(i=0; i<array.length; i++) {
//         results[arr[i][id]]= arr[i]
//      }
//     return results
// }

function sockMerchant(n, ar) {
//iterate over array - group duplicates together - maybe object/keys?
//iterate over object - for each unique key - if obj[key] % 2 === 0...increment a counter to indicate a pair
// return a counter
    let colors = {}
    let counter = 0

    for(let i=0; i < ar.length; i++) {
        if(!colors[ar[i]])
        colors[ar[i]] = 0
        colors[ar[i]] += 1
    }
    // console.log(colors)

    for(let key in colors) {
    let num = colors[key] / 2

    if (num => 1) {
        let wNum = Math.floor(num)
        counter += wNum
        }
    }

    return counter
}

function countingValleys(n, s) {
// SPLIT STRING into array of characters to iterate over
// set sea level at 0
// for each character - if character = D seaLevel -1, if U, seaLevel +1
// if sealevel = 0 and character iterated over = U = found a valley - increment valley counter

let valleys = 0
let seaLevel = 0

let trip = s.split("")

for (let i = 0; i < trip.length; i++) {
    if (trip[i] === 'U') {
        seaLevel += 1
    } else {
        seaLevel -= 1
    }
    if (trip[i] === 'U' && seaLevel === 0)
    // valley found i.e. back to sea level after an up-step
        valleys += 1
}
return valleys
}

function jumpingOnClouds(c) {
// jumpArray = push indexesOf each '0' element = valid jumps
// jumps needed = jumpArray.length - 1
// iterate over jump array - start at index 0. if jumpArr[i] + jumpArr[i + 2] <= jumpArr[i] + 2 then -1 from jumps needed i.e. can skip over that jump

    let jumpArr = []
    let jumpCount = 0

    for (let i = 0; i < c.length; i++) {
        if( c[i] !== 1) {
        jumpArr.push(i)
        }
    }

    for (let i = 0; i < jumpArr.length; i++) {
        jumpCount = jumpArr.length - 1

        if (jumpArr[i] + jumpArr[i + 2] <= jumpArr[i] + 2) {
            jumpCount -= 1
        }
        return jumpCount
    }
}

class Cart {
  constructor() {
  this.contents = []
  }

  add(item) {
    return this.contents.push(item)
  }

  remove(item) {
    return this.contents.splice(this.contents.indexOf(item), 1)
  }

  print() {
    return console.log(this.contents)
  }
}

class Cart {
  constructor(dataBase) {
  this.contents = dataBase,
  }

  add(item) {
    return this.contents.push(item)
  }

  remove(item) {
    return this.contents.splice(this.contents.indexOf(item), 1)
  }

  print() {
    return console.log(this.contents)
  }
}

// JS CALCULATOR
class Calculator {
  constructor() {
    this.equals = 0
  }

  clear() {
    return this.equals = 0
  }

  add(num1, num2) {
    let result = num1 + num2
    this.equals = result
    return this.equals
  }

  subtract(num1, num2) {
    let result = num1 - num2
    this.equals = result
    return this.equals
  }

  multiply(num1, num2) {
    let result = num1 * num2
    this.equals = result
    return this.equals
  }

  divide(num1, num2) {
    let result = num1 / num2
    this.equals = result
    return this.equals

  }
}

// JS CALCULATOR - using object chaining by returning 'this'
class Calculator {
  constructor() {
    this.equals = 0
  }

  clear() {
    this.equals = 0
    return this
  }

  add(num1) {
    this.equals += num1
    return this
  }

  subtract(num1) {
    this.equals -= num1
    return this
  }

  multiply(num1) {
    this.equals *= num1
    return this
  }

  divide(num1) {
    his.equals /= num1
    return this

  }
}

//BUY-SELL STOCKS problem
// Suppose we could access yesterday’s stock prices via an array called stockPricesYesterday, where:
// The indices are the time in minutes past trade opening time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 60 minutes after the market opened, stockPricesYesterday[60] = 500;
// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

const bestProfit = (arr) => {
  //best profit = highest sale price - lowest buy price
  //buy can't be last index
  //sale date can't be before buy date

  // iterate over the array`
  // for each element - keep a running record of the index for the min value = currMin

  let minIndex = 0
  let maxIndex = 1
  let currMin = 0 // find the index of the minimum price/value
  let maxProfit = 0

  for(let i=0; i < arr.length; i++) {
    if(arr[i] < arr[currMin]) {
      currMin = i // if the currently iterated element is less than the previously set currMin - change the index of currMin to i
    }

    if(arr[maxIndex] - arr[minIndex] < arr[i] - arr[currMin]) {
      maxIndex = i
      minIndex = currMin
    }
  }

  maxProfit = arr[maxIndex] - arr[minIndex]

  return maxProfit

}


const bestProfit = (arr) => {
  //best profit = highest sale price - lowest buy price
  //buy can't be last index
  //sale date can't be before buy date

  // find the lowest price to buy at:
  // create a new arary, excluding last element, sort it lowest to highest
  let buyPrice = arr.slice(0, -1).sort((a, b) => a - b)[0]

  // find the index of the lowest price in the original array
  let buyIndex = arr.indexOf(buyPrice)

  // find the highest sale price after the index of the buy price:
  // create a new array, copy a subsection of it at index AFTER buyPrice, sort that section highest to lowest - get highest (index 0)
  let salePrice = arr.slice(buyIndex + 1).sort((a, b) => b - a)[0]

  return salePrice - buyPrice

}

let uniqueInOrder = function(iterable) {
  results = []

  if (typeof iterable === "string") {
    array = iterable.split("")

    for (i = 0; i < array.length; i++) {
      if (array[i] !== array[i + 1])
        results.push(array[i])
    }
  } else {
    array = iterable

    for (j = 0; j < array.length; j++) {
      if (array[j] !== array[j + 1])
        results.push(array[j])
    }
  }
  return results
}

const merge = (arr1, arr2) => {
  return arr1.concat(arr2).sort((a, b) => a - b)
}

const merge = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

//climbing stairs: You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Note: Given n will be a positive integer.
const climbStairs = n => {
  let prev = 1
  let curr = 1

  for(let i = 1; i < n; i++) {
    prev = curr
    curr = prev + curr
  }

  return curr
}

const lengthOfLastWord = s => {
  let arr = s.split(/\b/)
  results = []

  for(i = 0; i < arr.length; i++) {
    if(arr[i].match(/[A-Za-z]/)) {
      results.push(arr[i])
    }
  }

  if(results.length === 0) {
    return 0
  } else
    let final = results.pop()
    return final.length
}

const romanToInt = s => {
  let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let values = [1, 5, 10, 50, 100, 500, 1000]


  let arr = s.split("")
  // console.log(arr)
  let nums = []

  for(i=0; i < arr.length; i++) {
    // console.log(arr[i])
    if(arr[i] === 'I' && (arr[i+1] === 'V' || arr[i+1] === 'X')) {
      nums.push(-1)
    } else if(arr[i] === 'X' && (arr[i+1] === 'L' || arr[i+1] === 'C')) {
      nums.push(-10)
    } else if(arr[i] === 'C' && (arr[i+1] === 'D' || arr[i+1] === 'M')) {
      nums.push(-100)
    } else {
      let elem = values[roman.indexOf(arr[i])]
      // console.log(elem)
      nums.push(elem)
    }
  }
  // console.log(nums)
  return nums.reduce((acc, curr) => acc + curr)
}

// FIND NUMBER OF UNIQUE PAIRS GIVEN A SET ( n NUMBER OF ELEMENTS)
n(n-1)/2

// NUMBER TO ROMAN

const numToRoman = num => {

  let result = ''
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]

for(i=0; i<=decimal.length; i++) { // for each number in the decimal array
  while (num % decimal[i] < num) { // keep trying the same number until it won't fit - while num % each index in array is less than num i.e IF it is divisible (i.e. if not divisible will just return num) - then move on to next index
    result += roman[i] // add the roman equivalent to results string
    num -= decimal[i] // minus that decimal number from num - on next iteration num will be less
  }
}
return result
}

const romanNum = str => {
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]

  let result = 0

  for(i=0; i <= decimal.length; i++) {
    while(str.indexOf(roman[i]) === 0) {
      result += decimal[i]
      str = str.replace(str[0], "")
    }
  }
  return result
}

// RECURSIVE FIBONACCI

// COMPARE STRINGS METHOD
// == compares the VALUES of strings (assuming type coersion is not a issue)

//Find a Fixed Point (Value equal to index) in a given array
// Fixed Point in an array is an index i such that arr[i] is equal to i
const fixedPoint = (arr) => {

  for(i=0; i < arr.length; i++) {
    if(i === arr[i]) {
      return i
    }
  }
  return -1
}

const validParens = s => {
  // let valid = ['{}', '()', '[]']

    while(s.length !== 0 && (s.includes('()') || s.includes('[]') || s.includes('{}'))) {
      s = s.replace('()', '')
      s = s.replace('{}', '')
      s = s.replace('[]', '')
    }

    if(s.length === 0) {
      return true
    }
    return false
  }

  const plusOne = digits => {

    for (i=digits.length -1; i >=0; i--) {
      if(digits[i] < 9) {
        digits[i] = digits[i] + 1
        return digits
      } else {
        digits[i] = 0
      }
    }
    if (digits[0] === 0) {
      digits.unshift(1)
    }
    return digits
  }

  const houseRobber = arr => {
    // can only rob non-adjacent houses i.e. odd indexes or even indexes

    let oddArr = []
    let evenArr = []

    for(i=0; i < arr.length; i++) {
      if(i % 2 === 0) {
        evenArr.push(arr[i])
      } else {
        oddArr.push(arr[i])
      }
    }

    let oddTotal = oddArr.reduce((acc, curr) => acc + curr)
    let evenTotal = evenArr.reduce((acc, curr) => acc + curr)

    if(oddTotal > evenTotal) {
      return oddTotal
    } else {
      return evenTotal
    }
  }

  const isAnagram = (s, t) => {
    // each string has same letters
    // sort each string alphabetically
    // if same length - check each index against the other

    if(s.length !== t.length) {
      return false
    }

    let sArr = s.split("").sort()
    let tArr = t.split("").sort()

    for(i=0; i < sArr.length; i++) {
      if(sArr[i] !== tArr[i]) {
        return false
      }
    }
    return true
  }

  const findDifferent = (s, p) => {

    let sArr = s.split("").sort() // sort to compare positions
    let tArr = t.split("").sort()

    for(i=0; i < tArr.length; i++) { // iterate over longer string with possible inclusion
      if(tArr[i] !== sArr[i]) {
        return tArr[i]
      }
    }
  }

  const ransomNote = (note, magazine) => {

    let noteArr = note.split("")
    let magazineArr = magazine.split("")

    for(i=0; i < noteArr.length; i++) {
      if(magazineArr.indexOf(noteArr[i]) === -1) {
        return false
      } else {
        magazineArr.splice(magazineArr.indexOf(noteArr[i]), 1)
      }
    }
    return true
  }

  //LONGEST PALINDROME:
  // letters must be multiples of 2 - if divisible by 2 - increment counter by number
  // if not divisible by 2
      // if number is 1 - push to 1's array
      // if number is > 1 AND not divisible by 2...increment counter by number - 1
      // if 1's array.length > 0 add 1 to counter as the single permissable singleton
  // can only have 1 singular letters
  const longestPalindrome = s => {
    let counts = {}
    let counter = 0
    let onesArr = []

    let sArr = s.split("")

    for(i=0; i < sArr.length; i++) {
      if(!counts[sArr[i]])
      counts[sArr[i]] = 0
      counts[sArr[i]] += 1
    }

    for(key in counts) {
      if(Object.keys(counts) === 1) {
        counter += counts[key]
      } else if (counts[key] % 2 === 0) {
        counter += counts[key]
      } else if (counts[key] === 1) {
        onesArr.push(key)
      } else {
        counter += (counts[key] - 1)
      }
    }

    if (onesArr.length >= 1) {
      counter += 1
    }

    return counter
  }

  const firstNr = s => {
    // iterate over string - push each character to object as key (unique)
    // value for each key would increment at each iteration
    // iterate over occurances object - find value of 1
    // letter = key
    // find indexOf of that letter in string

    let occurances = {}
    let result = []

    for(let i=0; i<s.length; i++) {
      if(!occurances[s.[i]])
      occurances[s[i]] = 0
      occurances[s[i]] += 1
    }

    for(key in occurances) {
      if(occurances[key] === 1) {
        result.push(key)
      }
    }

    if(result.length === 0) {
      return -1
    } else {
      for(i=0; i < result.length; i++) {
        result[i] = s.indexOf(result[i])
      }
    }

    result = result.sort((a, b) => a - b)
    return result[0]
  }

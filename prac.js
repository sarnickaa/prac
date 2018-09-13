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
      return 0
    } else if (val > arr[arr.length - 1]) {
      return arr.length
    } else
      for (i=0; i<arr.length; i++) {
      if(val === (1 + arr[i - 1]) && (1 - arr[i + 1])) {
        indexPosition = i
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

const mostCommon = arr => {
  let results = {}
  let resArr = []

  for (i=0; i<arr.length; i++) {
    if (!results[arr[i]])
    results[arr[i]] = 0
    results[arr[i]] +=1
  }

  for(key in results) {
    resArr.push(results[key])
  }

  resArr.sort((a, b) => a - b)
  return resArr.pop()
}

//rotate array k number of steps
// pop() and shift() k number of times
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

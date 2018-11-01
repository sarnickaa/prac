// BUBBLE SORT:
const bubbleSort = arr => {
  for(let i = arr.length - 1; i>=0; i--) {
    // start at the last element of the array - consider the last element first
    for (let j = 1; j<=i; j++) {
      // start looping through the array again at the 2nd element (index 1) and end at i (will be the last index on the first pass, second to last on the second pass etc etc.)
      // see animation: https://en.wikipedia.org/wiki/Bubble_sort
      if(arr[j-1] > arr[j]) {
        //if first element (index 0) is bigger than index 1
        let temp = arr[j-1]
        //assign that value to temp
        arr[j-1] = arr[j]
        // assign the smaller value to index 0
        arr[j] = temp
        // assign the temp value to index 1
      }
    // continue through the array comparing adjacent elements (nested loop until last element)
    // each comparison will move the larger element to the right-most position
    }
    // keep passing through the outer loop BACKWARDS - as the largest integer will always end up on the end and thus doesn't need to be evaluated again
  }
  return arr
}

// with a do...while loop
const bubbleSort = arr => {
    let swapped
    // execute the following code as long as swapped evaluates to true
    // the while condition is evaluated after each pass through the loop
    // if it evaluates to true - the statement is re executed
    // every iteration - if integers are in the wrong order - the swap occurs and swapped is set to true
    do {
      swapped = false
      for(let i=0; i < arr.length-1; i++) {
              if (arr[i] > arr[i+1]) {
                  var temp = arr[i];
                  arr[i] = arr[i+1];
                  arr[i+1] = temp;
                  swapped = true;
                }
            }
        } while (swapped);
  return arr
}

// SELECTION SORT:
// Go through the array, find the index of the lowest element swap the lowest element with the first element. Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element) and find the index of the lowest and swap it with the second element.
// thats how it continues to select (find out) the lowest element of the array and putting it on the left until it hits the last element.
const selectionSort = arr => {
  let minIndex = 0
  let temp = 0

  for(let i=0; i < arr.length; i++) {
    minIndex = i
    for(let j= i+1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // this will find the minimum index on each pass of the outer loop (excluding the currently iterated element i.e. the left-most)

    // do the swap
    temp = arr[i]
    // assign a temp container for the currently iterated element
    arr[i] = arr[minIndex]
    // assign the value of the minimum to the left most element i.e. the smallest is first
    arr[minindex] = temp
    // put the temp value back in the array to be processed later
  }
  return arr
}

const insertionSort = arr => {

  for(let i = 0; i<arr.length; i++) {
      let tempElem = arr[i]
      // current element being iterated stores as tempElem
      let j = i - 1
      // j = element BEFORE the current interation
      // the while loop will only kick in at arr[1] - the first element is skipped
    while(j >= 0 && arr[j] > tempElem) {
      // this does not kick in until j = 1 (2nd element of array)
      // if arr[j] is BIGGER than current iteration i.e. if current iteration is smaller than the element before it...
      // perform a swap
      arr[j+1] = arr[j]
      // assign that value to the position AFTER current iteration
      j--
      // loop through until j = 0
    }
    arr[j+1] = tempElem
}
  return arr
}

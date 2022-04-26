"use strict";

TEST 1
const a = [2,1,2,3,3,4];
const b = [1,2,2,1];
const c = [2,2,3,3,2,2];

function array (arr){
    let middleIndex = Math.ceil(arr.length / 2);
    let firstHalf = arr.splice(0, middleIndex);
    let secondHalf = arr.splice(-middleIndex);
}

let newArray = a.sort((arr) => 0.5 - Math.random());
newArray = b.sort((arr) => 0.5 - Math.random());
newArray = c.sort((arr) => 0.5 - Math.random());

console.log(a,a.slice(3));
console.log(b,b.slice(2));
console.log(c,c.slice(3));

// TEST 1
function divideArray(arr, n) {
  let divideLength = Math.max(arr.length / n);
  let divide = [];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    if (
      arr.indexOf(0) == arr.indexOf(1) ||
      arr.indexOf(1) == arr.indexOf(2) ||
      arr.indexOf(2) == arr.indexOf(0)
    ) {
      return divide;
    }
  }
  for (let i = 0; i < n; i++) {
    if (divideLength * (i + 1) <= arr.length)
      divide.push(arr.slice(divideLength * i, divideLength * (i + 1)));
  }
  return divide;
}

console.log(divideArray([2, 1, 2, 3, 3, 4], 2));
console.log(divideArray([1, 2, 2, 1], 2));
console.log(divideArray([2, 2, 3, 3, 2, 2], 2));

// TEST 2
function isIdentityMatrix(matrixData) {
  for (let i = 0; i < matrixData.length; i++) {
    let row = matrixData.length;
    let col = matrixData[i].length;
    if (row != col) {
      console.log("Matrix should be a square matrix");
      return false;
    }
  }
  for (let i = 0; i < matrixData.length; i++) {
    for (let j = 0; j < matrixData.length; j++) {
      if (
        (matrixData[i][j] !== 1 && i === j) ||
        (matrixData[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isIdentityMatrix([
    [1, 0, 0, 2],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

// TEST 3
class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  get length() {
    return this.tailIndex - this.headIndex;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(8);
queue.enqueue(21);
queue.enqueue(15);
queue.enqueue(1);
queue.enqueue(50);
queue.dequeue();
queue.length;
queue.isEmpty;
console.log(queue);
console.log(queue.peek());
console.log(queue.length);

// TEST 7

const arr = [1, 2, 6, 4, 5];
const triplearr = [
  [1, 2, 4],
  [2, 4, 6],
  [1, 4, 1],
];
let result = [];

for (let i = 0; i < triplearr.length; i++) {
  let response = tripleArray(triplearr[i][0], triplearr[i][1], triplearr[i][2]);
  result[i] = response;
}

function tripleArray(t1, t2, t3) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (t1 == arr[i] && t2 == arr[j] && t3 == arr[k]) {
          sum = sum + 1;
        }
      }
    }
  }
  return sum;
}
console.log(result);

// TEST 8
function mergeStrings(s1, s2) {
  let a1 = s1.length;
  let a2 = s2.length;
  let pr1 = 0;
  let pr2 = 0;
  let ans = "";

  while (pr1 < a1 && pr2 < a2) {
    if (s1[pr1] < s2[pr2]) {
      ans += s1[pr1];
      pr1++;
    } else {
      ans += s2[pr2];
      pr2++;
    }
  }

  if (pr1 < a1) {
    ans += s1.substring(pr1, a1);
  }
  if (pr2 < a2) {
    ans += s2.substr(pr2, a2);
  }
  console.log(ans);
}

var S1 = "super";
var S2 = "tower";
mergeStrings(S1, S2);

// TEST 6
// top left to bottom right
let findTheWay = function (matrix) {
  // Directions
  const nextEl = {
    0: { i: 0, j: 1 },
    1: { i: 1, j: 0 },
    2: { i: 1, j: 0 },
    3: { i: 0, j: 1 },
    4: { i: 1, j: 0 },
    5: { i: 1, j: 0 },
    6: { i: 1, j: 0 },
    7: { i: 0, j: 1 },
  };

  let dir = {
    0: [0, 2, 5], //top right
    1: [4, 5], //top down
    2: [4, 5], //left down
    3: [0, 2, 5], //right down
    4: [0, 2, 5], //top right
    5: [1, 2, 3], //top left
  };

  let m = matrix.length,
    n1 = matrix[0].length;
  console.log(m, n1, "length");
  let curri = 0,
    currj = 0;

  //current element in matrix
  let currEl = matrix[curri][currj];
  console.log(currEl, "currentElement");

  while (curri < m && currj < n1) {
    //current i and current j
    if (curri === m - 1 && currj === n1 - 1) {
      if (matrix[curri][currj] === 0 || matrix[curri][currj] === 4) {
        return true;
      }
      return false;
    } else {
      //directions of matrix
      let direction = dir[currEl];

      //current element of next element in matrix
      const nextOfCurre = nextEl[currEl];
      console.log("nextOfCurr", nextOfCurre);

      //nextelement of i and nextelement of j
      const [nexti, nextj] = [
        nextOfCurre.i ? curri + 1 : curri,
        nextOfCurre.j ? currj + 1 : currj,
      ];
      console.log(nexti, nextj, "nexti,nextj");

      const nextEle = matrix[nexti][nextj];
      console.log("nextEle", nextEle, direction);

      //if direction are include in nextelement so loop are excute otherwiase false
      if (direction.includes(nextEle)) {
        console.log("match");

        //match in current and next
        currEl = nextEle;
        curri = nexti;
        currj = nextj;
      } else {
        return false;
      }
    }
  }
};
let matrix = [
  [0, 2, 0, 1, 3, 2],
  [2, 1, 4, 5, 0, 0],
  [3, 1, 3, 1, 1, 2],
  [1, 0, 1, 0, 2, 1],
  [1, 4, 1, 2, 1, 1],
  [4, 0, 5, 3, 4, 4],
];
console.log(findTheWay(matrix));

//304MinimumCostropes.js

const minCost = (len, size) => {
  len.sort();
  let sum = 0;

  while (len.length > 1) {
    let firstValue = len.shift();
    let secondValue = len.shift();
    sum += firstValue + secondValue;
    len.unshift(firstValue + secondValue);

    len.sort();
  }

  return sum;
};

let len = [4, 3, 2, 6];
let size = len.length;
console.log("Total cost for connecting" + " ropes is " + minCost(len, size));

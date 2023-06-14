const jumpSearch = (arry, n, number) => {
  let squareOflength = parseInt(Math.sqrt(n));
  console.log(squareOflength);
  let previosLength = 0;

  while (arry[Math.min(squareOflength, n)] < number) {
    previosLength = squareOflength;
    squareOflength += parseInt(Math.sqrt(n));
    if (previosLength >= n) return -1;
  }
  console.log(previosLength, "previosLengths");

  while (arry[previosLength] < number) {
    previosLength++;
    if (arry[previosLength] == number) return previosLength;
    else if (previosLength >= n) return -1;
  }
  if (arry[previosLength] == number) return previosLength;
  return -1;
};

// function jumpSearch(arr, x, n) {
//   // Finding block size to be jumped
//   let step = Math.sqrt(n);

//   // Finding the block where element is
//   // present (if it is present)
//   let prev = 0;
//   while (arr[Math.min(step, n) - 1] < x) {
//     prev = step;
//     step += Math.sqrt(n);
//     if (prev >= n) return -1;
//   }

//   // Doing a linear search for x in block
//   // beginning with prev.
//   while (arr[prev] < x) {
//     prev++;

//     // If we reached next block or end of
//     // array, element is not present.
//     if (prev == Math.min(step, n)) return -1;
//   }
//   // If element is found
//   if (arr[prev] == x) return prev;

//   return -1;
// }

function main() {
  let arryOfInteger = [1, 23, 45, 56, 93, 111, 123, 132];

  let resultRecusrive = jumpSearch(arryOfInteger, arryOfInteger.length - 1, -1);
  console.log(resultRecusrive, "resultRecusrive result ");
}

main();

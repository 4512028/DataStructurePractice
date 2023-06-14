//reversAnArray

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function recursiveOperation(arryValue) {
  let left = 0;
  let right = arryValue.length - 1;
  while (left < right) {
    let item = arryValue[left];
    arryValue[left] = arryValue[right];
    arryValue[right] = item;
    left++;
    right--;
  }
}

function main() {
  let arryValue = [1, 23, 4, 55, 65, 6767, 8, 79, 890];
  printArray(arryValue);
  recursiveOperation(arryValue);
  console.log("lsjfjnkj");
  printArray(arryValue);
}
main();

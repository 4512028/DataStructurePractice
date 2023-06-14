//rotationArray

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function leftrotation(arryValue, numberOfRotation) {
  let tempArry = [];

  for (let i = numberOfRotation; i < arryValue.length; i++) {
    tempArry.push(arryValue[i]);
  }
  for (let i = 0; i < numberOfRotation; i++) {
    tempArry.push(arryValue[i]);
  }
  return tempArry;
}
function rightrotation(arryValue, numberOfRotation) {
  let tempArry = [];

  for (let i = arryValue.length - numberOfRotation; i < arryValue.length; i++) {
    tempArry.push(arryValue[i]);
  }
  for (let i = 0; i < arryValue.length - numberOfRotation; i++) {
    tempArry.push(arryValue[i]);
  }
  return tempArry;
}

function storeRotation(arryValue, numberOfRotation) {
  let rotation = 0;
  while (rotation < numberOfRotation) {
    let firstIndex;
    for (let index = 0; index < arryValue.length; index++) {
      if (index == 0) {
        firstIndex = arryValue[index];
        arryValue[index] = arryValue[index + 1];
      } else if (index == arryValue.length - 1) {
        arryValue[arryValue.length - 1] = firstIndex;
      } else {
        arryValue[index] = arryValue[index + 1];
      }
    }
    rotation++;
  }
}
function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}
/*Function to left rotate arr[] of size n by d*/
function jugglingLeftRotate(arr, d, n) {
  let g_c_d = gcd(d, n);

  for (let index = 0; index < g_c_d; index++) {
    let temp = arr[index];
    let j = index;
    while (1) {
      let k = j + d;
      if (k >= n) k = k - n;
      if (k == index) break;
      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}
function rotationArray() {
  let arryValue = [1, 23, 4, 55, 65, 6767, 8, 79, 890, 12];
  let numberOfRotation = 3;
  console.log("====================>First Approch temp arry");
  arryValue = leftrotation(arryValue, numberOfRotation);
  console.log(arryValue);
  console.log("=====>");
  arryValue = rightrotation(arryValue, numberOfRotation);
  console.log(arryValue);
  console.log("====================> second approch rotate one by one ");
  storeRotation(arryValue, numberOfRotation);
  console.log(arryValue);

  console.log("====================>third Approch juggling algorithum");
  let arryValue1 = [1, 2, 3, 4, 5, 6, 7];

  jugglingLeftRotate(arryValue1, numberOfRotation, arryValue1.length);
  console.log(arryValue1);
}
rotationArray();

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const linearSearch = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i;
    }
  }

  return null;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    }
  }
  return -1; // if num is not present in the array
}

let studentIds = [11, 12, 15, 19, 23, 45, 54, 91, 100];
let result = binarySearch(studentIds, 100);
console.log(result);

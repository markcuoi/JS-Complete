// Given an array arr[] of size n, its prefix sum array is
// another array prefixSum[] of the same size, such that the value of
// prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].
// Input  : arr[] = {10, 20, 10, 5, 15}
// Output : prefixSum[] = {10, 30, 40, 45, 60}

const prefixSum = (arr) => {
  // Create an empty array of the same size as input.
  const result = [];

  // Initialize the first position of the array with the same value as the first item of the item.
  result[0] = arr[0];

  // Go through the input array, starting in the position 0, to the n.
  for (let i = 1; i < arr.length; i++)
    // Assign the result of the previous value and the value in the current position in the input array.
    result[i] = result[i - 1] + arr[i];

  return result;
};

const prefixTestArray = [2, 4, 6, 8, 10, 12, 14];

console.log(prefixSum(prefixTestArray));

// const accumulate = (arr) =>
//   arr.map(
//     (
//       (sum) => (value) =>
//         (sum += value)
//     )(0)
//   );
// // Example
// accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]

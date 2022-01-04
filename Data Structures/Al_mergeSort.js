const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);

  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
};

arr = [2, 5, 4, 1, 3];

console.log(mergeSort(arr));

// 2 5 4         1 3

// 25    4       1   3

// 2   5    4      13

// 2 5  4            13

// 2 4 5           13

// 1 2 3 4 5

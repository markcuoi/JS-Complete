// Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.

// const TwoSum = (nums, target) => {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     console.log({ p1, value: num[p1] });
//     const numberToFind = target - nums[p1];
//     console.log({ numberToFind });
//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       console.log({ p2, value: num[p2] });
//       if (nums[p2] === numberToFind) return [p1, p2];
//     }
//   }
//   return null;
// };

const TwoSum = (nums, target) => {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    if (numsMap[nums[p]] >= 0) {
      return [numsMap[nums[p]], p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
};

// Two Pointer Technique (sorted Array)
// const TwoSum = (nums, target) => {
//   let p1 = 0,
//     p2 = nums.length - 1;

//   while (p1 < p2) {
//     const curTarget = nums[p1] + nums[p2];
//     if (curTarget == target) {
//       result = [p1, p2];
//     } else if (curTarget < target) {
//       p1++;
//     } else {
//       p2--;
//     }
//   }
//   return result;
// };

const numsArr = [1, 3, 7, 9, 2];
const targetToFind = 11;
console.log(TwoSum(numsArr, targetToFind));

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//------------------Brute Force Approch---------------------------//
/*
Time Complexity: O(n^2)
Space Complexity: O(n)
*/
//  var twoSum = (num, targetNumber) => {
//         //check length to make sure it is not less than or equalto 1
//         if(num.length <=1) return null;
//         //we will create two loops nested
//         for(let i = 0; i < num.length; i++){
//             // we will start our second index at index1 + 1
//             for(let j = i+1; j < num.length; j++){
//                 //and check if the array values at each index equal the targetNumber
//                 if(num[i]+num[j] === targetNumber){ 
//                    return [i,j]
//                 }
//              }
//         } 
//     };
// const result = twoSum([2,7,11,15], 9)
// console.log(result);

//-------------------------Hashing approch---------------------------//
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
// const twoSum = (nums, targetNumber) => {
//     const map = new Map();
  
//     for (let i = 0; i < nums.length; i++) {
//         // Check if number is present in the map
//         if (map.has(nums[i])) {
//         return [map.get(nums[i]), i];
//         }
//         // If number is not present in the map than set it in the map targetNumber - nums[i] to find out the remaining number
//         map.set(targetNumber - nums[i], i);
//     }
//     return [];
// };

// const result = twoSum([2,7,11,15,2], 4)
// console.log(result);


//-------------Hashing approch without using MAP----------------//
/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
const twoSum = (nums, targetNumber) => {
    const comp = {};
    for(let i=0; i<nums.length; i++) {
        if(comp[nums[i]] !== undefined) {
            return [comp[nums[i]], i];
        }
        comp[targetNumber-nums[i]] = i;
    }
    return [];
}

const result = twoSum([2,7,11,15], 4)
console.log(result);

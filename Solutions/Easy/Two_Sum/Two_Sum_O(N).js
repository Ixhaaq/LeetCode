// Complexity: O(N^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
    
// };

var twoSum = function(nums, target) {
    
    let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum === target){
                return [nums.indexOf(nums[left]), nums.indexOf(nums[right])]
            } else if (sum > target){
                right --;
            } else {
                left ++
            }
        }
        
    };
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
var threeSum = function (nums) {
    const results = [];

    if (nums.length < 3)
        return results;
    
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        var firstNum = nums[i];
        if (firstNum > 0)
            break;
        
        // Remove duplicates
        if(i > 0 && firstNum == nums[i - 1])
            continue;
        
        let secondNumIndex = i + 1;
        let thirdNumIndex = nums.length - 1;

        while(secondNumIndex < thirdNumIndex) {
            let tempSum = firstNum + nums[secondNumIndex] + nums[thirdNumIndex];

            if (tempSum == 0){
                results.push([firstNum, nums[secondNumIndex], nums[thirdNumIndex]]);

                // Remove duplicates
                while (nums[secondNumIndex] == nums[secondNumIndex + 1])
                    secondNumIndex++
                while (nums[thirdNumIndex] == nums[thirdNumIndex - 1])
                    thirdNumIndex--
                
                secondNumIndex++;
                thirdNumIndex--;
            }
            else if(tempSum < 0)
                secondNumIndex++; //increment so the result will be larger
            else
                thirdNumIndex--; //decrement so the result will be smaller
        }
    }

    return results;
};

var nums = [0, 0, 0];
console.log(threeSum(nums))
console.log(undefined)
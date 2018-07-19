/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

/* ALGORITHM */
/* 
    * Have two variables, temp1 and temp2,
    * Sort the array in ascending order,
    * Loop through the array and make temp1 the lower of the two numbers
    * At the end of the array whatever is the value of temp1 will be the second largest and temp2 will be the largest
    
*/
function getSecondLargest(nums) {
    var arr_len = nums.length;
    var largest = nums[0];
    var second_largest = nums[0];
    for(var i = 0; i < arr_len ; i++){
        if(nums[i] > largest){
           second_largest = largest;
            largest = nums[i];
        }
        else if(nums[i] > second_largest && nums[i] != largest){
            second_largest = nums[i];
        }
    }
    return second_largest;
}

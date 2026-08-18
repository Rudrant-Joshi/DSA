var missingNumber = function(nums) {
  max = Math.max(...nums)
  min = Math.min(...nums)
  let result = undefined;
    for(i=0; i<nums.length; i++){
      if(nums.includes(nums[i]+1) == false && nums[i] != max)
        result = nums[i]+1

      else if(nums.includes(nums[i]-1) == false && nums[i] >! min)
        result = nums[i]-1

      else if (nums[i] == undefined || result == undefined) 
        result = max+1
    }
    return result
};
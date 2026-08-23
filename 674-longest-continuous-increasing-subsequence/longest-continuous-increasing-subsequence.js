var findLengthOfLCIS = function(nums) {
    let count = 1; let max=0;
    for(i=0; i<nums.length; i++){
      if(nums[i] < nums[i+1] ) count ++;
      if(max<=count) max = count
      if(nums[i] >= nums[i+1]) count = 1
    }
    return max
};
var findMaxConsecutiveOnes = function(nums) {
    let count = 0; let max=0;
    for(i=0; i<nums.length; i++){
      if(nums[i] === 1) count ++;
      if(max<=count) max = count
      if(nums[i] === 0) count = 0
    }
    return max
};
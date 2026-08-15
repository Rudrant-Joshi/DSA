var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;   
    else if(nums[i]>target) return i     
  }
    nums[nums.length] = target;
    return nums.length-1;
};
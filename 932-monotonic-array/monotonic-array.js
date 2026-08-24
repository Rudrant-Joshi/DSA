var isMonotonic = function(nums) {
    let ac = true, dc = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i-1]) ac = false;
        if (nums[i] > nums[i-1]) dc = false
    } 
    return ac || dc
};
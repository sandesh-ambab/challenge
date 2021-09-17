
function sumPlusMinus(nums) {
	let negative = 0;
	let positive = 0;
	for(var i = 0; i < nums.length; i++){
		if(nums[i] < 0){
			negative += nums[i];
		}
		else{
			positive += nums[i];
		}
	}
	return { plus:positive,
			 minus:negative
			}
}
var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];
sumPlusMinus(nums);
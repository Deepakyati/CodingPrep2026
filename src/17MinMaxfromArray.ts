interface minmaxresult{
    min: number;
    max: number;
}

function minmax(nums: number[]): minmaxresult  {

    if (nums.length===0){
        throw new Error ('Array must contain at least one element');
    }

    let min=nums[0]!;
    let max=nums[0]!;

    for (let i=1;i<nums.length;i++){
        const current = nums[i]!;
        if(current < min){
            min=current;
        }
        else if(current > max){
            max=current;
        }
    }
    return {min,max};

}

console.log(minmax([12,23,45,7,8,9,4,4,4,44444]));
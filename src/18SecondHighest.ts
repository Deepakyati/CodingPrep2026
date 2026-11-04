function secondHighestfromArray(nums: number[]): number|null {

    if (nums.length<2)
        return null;

    let Highest=-Infinity;
    let secondHighest = -Infinity;

    for (const i of nums){
        if (i>Highest){
            secondHighest = Highest;
            Highest = i;
        }
        else if (i>secondHighest && i!==Highest){
            secondHighest=i
        }
    }
    return secondHighest === -Infinity ?null:secondHighest;
}

console.log(secondHighestfromArray([10,20,30,40]))
function charCount(str: string): Record<string, number>{
    //Record<string, number> is a built-in utility type used to define 
    // the structure of an object (a dictionary or a map).

    const count: Record<string, number>={};

    for (const char of str){
        if(count[char]){
            count[char]+=1;
        }
        else{
            count[char]=1;
        }
    }
    return count
}

console.log(charCount('Deepak'))

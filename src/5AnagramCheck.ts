function isAnagram(str1:string, str2:string):boolean {

    const clean1=str1.toLowerCase().replace(/[^a-z0-9]/g,'');

    const clean2=str2.toLowerCase().replace(/[^a-z0-9]/g,'');

    if(clean1.length!==clean2.length){
        return false;
    }

    const counts: Record<string, number> = {};

    for (const char of clean1){
        counts[char] = (counts[char] || 0) +1;
    }

    for (const char of clean2){
        if(!counts[char]){
            return false
        }
        counts[char]-=1;
    }
    return true

}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("deepak", "chandan"));
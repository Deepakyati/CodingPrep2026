function isAnagram(str1:string, str2:string): boolean {

    const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g,'');
    const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g,'');
    
    if (clean1.length !== clean2.length){
        return false
    }

    const sorted1 = clean1.split('').sort().join('');
    const sorted2 = clean2.split('').sort().join('');

    return sorted1 === sorted2
 }
console.log(isAnagram("deepak", "chandan"));
console.log(isAnagram("listen", "silent"));

function countVC(str:string):{vowels: number, consonants:number}{

    const vowelSet = new Set(['a','e','i','o','u']);

    let vowels=0;
    let consonants=0;

    for (const char of str.toLowerCase()){
        if(char >='a' && char <='z'){
            if(vowelSet.has(char)){
                vowels++;
            }
            else{
                consonants++;
            }
        }
    }
    return {vowels, consonants};
}

console.log(countVC("Playwright 2026"));


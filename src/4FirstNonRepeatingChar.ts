function firstNonrepeatingChar(str: string): string | null {

    const charCount = new Map<string, number>();

    for (const char of str){
        const current = charCount.get(char)||0;
        charCount.set(char, current+1);
    }

    for (const char of str){
        if (charCount.get(char)===1){
            return char;
        }
    }
    return null;
}

console.log(firstNonrepeatingChar('swiss'))
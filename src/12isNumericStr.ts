function isNumeric(str: string): boolean {

    const trimmed = str.trim();

    if (!trimmed)
        return false;

    return /^\d+$/.test(trimmed);
}

console.log(isNumeric('12345D'));
console.log(isNumeric('12345'));
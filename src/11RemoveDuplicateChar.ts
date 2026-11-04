function removeDuplicate(str: string): string {

    const uniqueChars = new Set(str);

    return Array.from(uniqueChars).join('');
}

console.log(removeDuplicate('Deepaakbbb'))
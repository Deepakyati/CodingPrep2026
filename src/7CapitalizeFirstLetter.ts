function capitalizeWords(str: string): string {

    const words = str.split(" ");

    const capitalize = words.map(word => {
        if (!word)
            return '';
        return word[0]?.toUpperCase()+word.slice(1).toLowerCase();
    })

    return capitalize.join(' ');
}

console.log(capitalizeWords("welcome to hyderabad"));
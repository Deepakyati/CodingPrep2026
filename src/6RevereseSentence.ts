function ReverseSentence(sentence: string): string {
    const trimmed = sentence.trim();

    if (!trimmed)
        return '';

    const words = trimmed.split(/\s+/);

    return words.reverse().join(' ');
}

console.log(ReverseSentence("  TypeScript   with   Playwright  "));
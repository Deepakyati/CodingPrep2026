function LongestWords(sentence: string): string{

    const words = sentence.replace(/[^a-zA-Z0-9\s]/g,'').split(/\s+/);

    let longest ='';

    for (const word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(LongestWords("Automated regression pipelinuuuuuue passed!"));
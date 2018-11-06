const coatsBetterUmbrella= function coatsBetterUmbrella(sentence){
   let newSentence = sentence.replace(/umbrella/ig, "coat");
    return newSentence;
}

console.log(coatsBetterUmbrella(`she didn't like how heavy the rain was, so she decided to take her umbrella`));
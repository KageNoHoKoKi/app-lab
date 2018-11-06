const countline = function countline(sentence){
    let regString = /([A-Z][a-z]*)[\s-]([A-Z][a-z]*)/g
    let matched = sentence.match(regString);
    let counter = 0;
    for (i= 0; i < matched.length; i++) {
                counter +=1   
            }
            return counter;
        }

console.log(countline("Frederick Douglas Annabelle Lee"));
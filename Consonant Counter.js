// //using for loop to iterate through a sentene that counts the consonants



const countingConsonant = function countingConsonant(sentence){
    let counter = 0; 
    let arraySentence =sentence.split(""); 
    for(i=0; i < arraySentence.length; i++){
        if (arraySentence[i].equals("h") || arraySentence[i].equals("l")) {
            
            counter += 1;
        }
         
    }
    return counter;
}

console.log(countingConsonant("hello")); 




// const countingConsonant = function countingConsonant(sentence) {
//     let counter = 0;
//     //let regString = /[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]+/g
//     let regString = /[A-Z]?[a-z]?/g 
//     let matched = sentence.match(regString);
//     for (i= 0; i < matched.length; i++) {
//         counter +=1
//         console.log(matched);     
//     }
//     return counter;
// }

// console.log(countingConsonant(`Anchors`)); 


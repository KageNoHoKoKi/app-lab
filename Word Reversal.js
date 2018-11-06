//using charAt() function and backwards for loop to store in new sentence

let reversed = ``;

const reversal = function reversal(words) {
    for(i=words.length; i >=0 ; i--) {
        reversed += words.charAt(i);
    }
   return(reversed); 
}

console.log(reversal('saippuakivikauppias')); //longest palindrome in finish for dealer in lye. Also pretty bad example :D 